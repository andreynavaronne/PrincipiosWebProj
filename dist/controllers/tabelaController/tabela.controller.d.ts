import { TabelaService } from "../../services/tabelaService/tabela.service";
import { CreateTabelaDto } from "../../dto/tabelaDto/create-tabela.dto";
import { UpdateTabelaDto } from "../../dto/tabelaDto/update-tabela.dto";
export declare class TabelaController {
    private readonly tabelaService;
    constructor(tabelaService: TabelaService);
    create(createTabelaDto: CreateTabelaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTabelaDto: UpdateTabelaDto): string;
    remove(id: string): string;
}
