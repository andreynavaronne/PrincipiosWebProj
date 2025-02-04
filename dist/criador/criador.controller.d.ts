import { CriadorService } from "./criador.service";
import { CreateCriadorDto } from "./dto/create-criador.dto";
import { UpdateCriadorDto } from "./dto/update-criador.dto";
export declare class CriadorController {
    private readonly criadorService;
    constructor(criadorService: CriadorService);
    create(createCriadorDto: CreateCriadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCriadorDto: UpdateCriadorDto): string;
    remove(id: string): string;
}
