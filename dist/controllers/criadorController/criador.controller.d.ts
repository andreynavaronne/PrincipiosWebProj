import { CriadorService } from "../../services/criadorService/criador.service";
import { CreateCriadorDto } from "../../dto/criadorDto/create-criador.dto";
import { UpdateCriadorDto } from "../../dto/criadorDto/update-criador.dto";
export declare class CriadorController {
    private readonly criadorService;
    constructor(criadorService: CriadorService);
    create(createCriadorDto: CreateCriadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCriadorDto: UpdateCriadorDto): string;
    remove(id: string): string;
}
