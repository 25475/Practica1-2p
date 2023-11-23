export class UpdatePagoDto {

    private constructor(
      public readonly id: number,
      public readonly fecha?: string,
      public readonly monto?: number,
      public readonly factura?: string,
      public readonly facturaId?:string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.code = this.id;
      if ( this.fecha ) returnObj.detail = this.fecha;
      if ( this.monto ) returnObj.detail = this.monto;
      if ( this.factura ) returnObj.detail = this.factura;
      if ( this.facturaId ) returnObj.customerId = this.facturaId;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePagoDto?]  {
  
      const { id, fecha, monto, factura, facturaId } = props;
  
      
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !fecha && !monto && !factura && !facturaId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatePagoDto(id, fecha, monto, factura,facturaId)];
    }
  
  
  }