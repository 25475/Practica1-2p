import { Router } from 'express';
import { FacturasController } from './controller'; 
import { FacturaDatasourceImpl } from '../../infrastructure/datasource/factura.datasource.impl'; 
import { FacturaRepositoryImpl } from '../../infrastructure/repositories/factura.repository.impl'; 

export class FacturaRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new FacturaDatasourceImpl(); 
    const facturaRepository = new FacturaRepositoryImpl(datasource); 
    const facturaController = new FacturasController(facturaRepository);

    router.get('/', facturaController.getFacturas);
    router.get('/:id', facturaController.getFacturaById);
    
    router.post('/', facturaController.createFactura);
    router.put('/:id', facturaController.updateFactura);
    router.delete('/:id', facturaController.deleteFactura);

    return router;
  }

}


