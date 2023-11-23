import { UpdatePagoDto } from "../pago/update-pago.dto";


export class UpdateFacturaDto {

    private constructor(
      public readonly id: number,
      public readonly numero?: number,
      public readonly fecha?: string,
      public readonly total?: string,
      public readonly pagos?: UpdatePagoDto[],
      
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.id ) returnObj.id = this.id;
      if ( this.numero ) returnObj.numero = this.numero;
      if ( this.fecha ) returnObj.fecha = this.fecha;
      if ( this.total ) returnObj.total = this.total;
      if ( this.pagos ) returnObj.pagos = this.pagos;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateFacturaDto?]  {
  
      const { id, numero, fecha, total, pagos } = props;
      let newName =numero;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !numero && !fecha && !total && !pagos) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateFacturaDto(id, numero, fecha, total, pagos)];
    }
  }