import { CreatePagoDto, UpdatePagoDto } from '../dtos';
import { PagoEntity } from '../entities/pago.entity';



export abstract class PagoDatasource {

  abstract create( createPagoDto: CreatePagoDto ): Promise<PagoEntity>;

  abstract getAll(): Promise<PagoEntity[]>;

  abstract findById( id: number ): Promise<PagoEntity>;
  abstract updateById( updatePagoDto: UpdatePagoDto ): Promise<PagoEntity>;
  abstract deleteById( id: number ): Promise<PagoEntity>;

}