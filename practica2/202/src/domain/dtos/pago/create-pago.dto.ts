export class CreatePagoDto {
    private constructor(
      public readonly id: number,
      public readonly fecha: string,
      public readonly factura: number,
      public readonly facturaId: number,
      // public readonly transactions: any[],
      // public readonly transactions: createTransactionDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreatePagoDto?]  {
      const { id, fecha, factura, facturaId } = props;
      if ( !id ) return ['id property is required', undefined];
      if ( !fecha ) return ['Fecha property is required', undefined];
      if ( !factura ) return ['factura property is required', undefined];
      if ( !facturaId ) return ['facturaId property is required', undefined];
      return [undefined, new CreatePagoDto(id, fecha, factura,facturaId)];
    }
  }