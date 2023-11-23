export class UpdateFacturaDto {

    private constructor(
      public readonly id: number,
      public readonly numero?: number,
      public readonly fecha?: string,
      public readonly total?: number,
      public readonly pagos?: number,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.code = this.id;
      if ( this.numero ) returnObj.detail = this.numero;
      if ( this.fecha ) returnObj.facturaId = this.fecha;
      if ( this.total ) returnObj.facturaId = this.total;
      if ( this.pagos ) returnObj.facturaId = this.pagos;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateFacturaDto?]  {
  
      const { id, numero, fecha, total, pagos } = props;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !numero && !fecha && !total && !pagos) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateFacturaDto(id, numero, fecha, total, pagos)];
    }
  
  
  }