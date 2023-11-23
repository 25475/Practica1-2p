// DDD
import { Request, Response } from 'express';
import { CreateFacturaDto, UpdateFacturaDto } from '../../domain/dtos'; // Asegúrate de tener las importaciones correctas
import { FacturaRepository } from '../../domain'; // Asegúrate de tener las importaciones correctas

export class FacturasController {

  //* DI
  constructor(
    private readonly facturaRepository: FacturaRepository, // Asegúrate de tener las importaciones correctas
  ) { }

  public getFacturas = async (req: Request, res: Response) => {
    const facturas = await this.facturaRepository.getAll();
    return res.json(facturas);
  };

  public getFacturaById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const factura = await this.facturaRepository.findById(id);
      res.json(factura);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createFactura = async (req: Request, res: Response) => {
    const [error, createFacturaDto] = CreateFacturaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const factura = await this.facturaRepository.create(createFacturaDto!);
    res.json(factura);
  };

  public updateFactura = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateFacturaDto] = UpdateFacturaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedFactura = await this.facturaRepository.updateById(updateFacturaDto!);
    return res.json(updatedFactura);
  };

  public deleteFactura = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedFactura = await this.facturaRepository.deleteById(id);
    res.json(deletedFactura);
  };
}
