import { CreateTabelaDto } from "../../dto/tabelaDto/create-tabela.dto";
import { UpdateTabelaDto } from "../../dto/tabelaDto/update-tabela.dto";
export declare class TabelaService {
    create(createTabelaDto: CreateTabelaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTabelaDto: UpdateTabelaDto): string;
    remove(id: number): string;
}
