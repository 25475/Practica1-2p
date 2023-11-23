export class CreatePagoDto {
    private constructor(
      public readonly id: number,
      public readonly fecha: string,
      public readonly monto: string,
      public readonly factura: string,
      public readonly MetodoDePago: string,
      public readonly facturaId: CreatePagoDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreatePagoDto?]  {
      const { id, fecha, monto, factura, facturaId, MetodoDePago } = props;
      if ( !id ) return ['Code property is required', undefined];
      if ( !fecha ) return ['Code property is required', undefined];
      if ( !monto ) return ['Code property is required', undefined];
      if ( !factura ) return ['Code property is required', undefined];
      if ( !MetodoDePago ) return ['Code property is required', undefined];
      return [undefined, new CreatePagoDto(id, fecha, monto, factura, MetodoDePago, facturaId)];
    }
  }

