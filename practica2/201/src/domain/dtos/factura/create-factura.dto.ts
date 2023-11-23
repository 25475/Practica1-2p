import { CreatePagoDto } from "../pago/create-pago.dto";

export class CreateFacturaDto {
    private constructor(
      public readonly id: number,
      public readonly numero: number,
      public readonly fecha: string,
      public readonly total: string,
      public readonly pagos?: CreatePagoDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateFacturaDto?]  {
      const { id, numero, fecha, total, pagos } = props;
      if ( !id ) return ['Code property is required', undefined];
      if ( !numero ) return ['Code property is required', undefined];
      if ( !fecha ) return ['Code property is required', undefined];
      if ( !total ) return ['Code property is required', undefined];
      return [undefined, new CreateFacturaDto(id, numero, fecha, total, pagos)];
    }
  }