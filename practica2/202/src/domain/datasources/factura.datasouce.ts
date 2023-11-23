import { CreateFacturaDto, UpdateFacturaDto } from '../dtos';
import { FacturaEntity } from '../entities/factura.entity'; 
export abstract class FacturaDatasource {

  abstract create(createFacturaDto: CreateFacturaDto): Promise<FacturaEntity>;

  abstract getAll(): Promise<FacturaEntity[]>;

  abstract findById(id: number): Promise<FacturaEntity>;

  abstract updateById(updateFacturaDto: UpdateFacturaDto): Promise<FacturaEntity>;

  abstract deleteById(id: number): Promise<FacturaEntity>;
}
