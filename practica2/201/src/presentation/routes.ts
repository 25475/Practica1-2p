import { Router } from 'express';

import { FacturaRoutes,  } from './factura/routes';
import { PagoRoutes,  } from './pago/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/facturas', FacturaRoutes.routes );
    router.use('/api/pagos', PagoRoutes.routes );
    
    return router;
  }


}

