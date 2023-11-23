import { Request, Response } from 'express';
import { CreateFacturaDto, UpdateFacturaDto } from '../../domain/dtos'; // Asegúrate de tener las importaciones correctas
import { CreateFactura, DeleteFactura, GetFactura, GetFacturas, FacturaRepository, UpdateFactura } from '../../domain'; // Asegúrate de tener las importaciones correctas

export class FacturasController {

  //* DI
  constructor(
    private readonly facturaRepository: FacturaRepository,
  ) { }

  public getFacturas = (req: Request, res: Response) => {

    new GetFacturas(this.facturaRepository)
      .execute()
      .then(facturas => res.json(facturas))
      .catch(error => res.status(400).json({ error }));

  };

  public getFacturaById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetFactura(this.facturaRepository)
      .execute(id)
      .then(factura => res.json(factura))
      .catch(error => res.status(400).json({ error }));

  };

  public createFactura = (req: Request, res: Response) => {
    const [error, createFacturaDto] = CreateFacturaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateFactura(this.facturaRepository)
      .execute(createFacturaDto!)
      .then(factura => res.json(factura))
      .catch(error => res.status(400).json({ error }));

  };

  public updateFactura = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateFacturaDto] = UpdateFacturaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateFactura(this.facturaRepository)
      .execute(updateFacturaDto!)
      .then(factura => res.json(factura))
      .catch(error => res.status(400).json({ error }));

  };

  public deleteFactura = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteFactura(this.facturaRepository)
      .execute(id)
      .then(factura => res.json(factura))
      .catch(error => res.status(400).json({ error }));

  };
}
