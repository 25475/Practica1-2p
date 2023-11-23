export class UpdatePagoDto {

    private constructor(
      public readonly id: number,
      public readonly fecha: string,
      public readonly factura: number,
      public readonly facturaId: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id = this.id;
      if ( this.fecha ) returnObj.fecha = this.fecha;
      if ( this.factura ) returnObj.factura = this.factura;
      if ( this.facturaId ) returnObj.facturaId = this.facturaId;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdatePagoDto?]  {
  
      const { id, fecha, factura, facturaId } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !id && !fecha && !factura && !facturaId) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdatePagoDto(id, fecha, factura, facturaId)];
    }
  
  
  }