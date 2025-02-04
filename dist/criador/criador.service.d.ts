import { CreateCriadorDto } from "./dto/create-criador.dto";
import { UpdateCriadorDto } from "./dto/update-criador.dto";
export declare class CriadorService {
    create(createCriadorDto: CreateCriadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCriadorDto: UpdateCriadorDto): string;
    remove(id: number): string;
}
