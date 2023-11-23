export class CreateFacturaDto {
    private constructor(
      public readonly numero: number,
      public readonly fecha: string,
      public readonly total: number,
      // public readonly transactions: any[],
      // public readonly transactions: createTransactionDto[],
    ){}
  
    static create( props: {[key:string]: any} ): [string?, CreateFacturaDto?]  {
      const { numero, fecha, total } = props;
      if ( !numero ) return ['Code property is required', undefined];
      if ( !fecha ) return ['Detail property is required', undefined];
      if ( !total ) return ['Id customer property is required', undefined];
      return [undefined, new CreateFacturaDto(numero, fecha, total)];
    }
  }