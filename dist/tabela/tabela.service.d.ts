import { CreateTabelaDto } from "./dto/create-tabela.dto";
import { UpdateTabelaDto } from "./dto/update-tabela.dto";
export declare class TabelaService {
    create(createTabelaDto: CreateTabelaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTabelaDto: UpdateTabelaDto): string;
    remove(id: number): string;
}
