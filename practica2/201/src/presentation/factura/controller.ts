import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateFacturaDto, UpdateFacturaDto } from '../../domain/dtos/';


export class FacturasController {
  //* DI
  constructor() { }
  public getFacturas = async( req: Request, res: Response ) => {
    const facturas = await prisma.factura.findMany();
    return res.json( facturas );
  };
  public getFacturaById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const factura = await prisma.factura.findFirst({
      where: { id }
    });
    
    ( factura )
      ? res.json( factura )
      : res.status( 404 ).json( { error: `factura with id ${ id } not found` } );
  };
  public createFactura = async( req: Request, res: Response ) => {
    
    const [error, createFacturaDto] = CreateFacturaDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const { pagos, ...rest } = createFacturaDto!;
    console.log(pagos);
    const factura = await prisma.factura.create({
      data: {...rest, pagos: { create:pagos } }
    });

    res.json( factura );

  };
  public updateFactura = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateFacturaDto] = UpdateFacturaDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const factura = await prisma.factura.findFirst({
      where: { id }
    });

    if ( !factura ) return res.status( 404 ).json( { error: `Factura with id ${ id } not found` } );

    const updatedFactura = await prisma.factura.update({
      where: { id },
      data: updateFacturaDto!.values
    });
  
    res.json( updatedFactura );

  }
  public deleteFactura = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const factura = await prisma.factura.findFirst({
      where: { id }
    });

    if ( !factura ) return res.status(404).json({ error: `User with id ${ id } not found` });

    const deleted = await prisma.factura.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Factura with id ${ id } not found` });
    

  }
}