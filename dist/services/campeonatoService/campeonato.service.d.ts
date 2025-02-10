import { CreateCampeonatoDto } from "../../dto/campeonatoDto/create-campeonato.dto";
import { UpdateCampeonatoDto } from "../../dto/campeonatoDto/update-campeonato.dto";
export declare class CampeonatoService {
    create(createCampeonatoDto: CreateCampeonatoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCampeonatoDto: UpdateCampeonatoDto): string;
    remove(id: number): string;
}
