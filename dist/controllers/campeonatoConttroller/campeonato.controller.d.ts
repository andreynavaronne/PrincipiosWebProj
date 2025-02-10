import { CampeonatoService } from "../../services/campeonatoService/campeonato.service";
import { CreateCampeonatoDto } from "../../dto/campeonatoDto/create-campeonato.dto";
import { UpdateCampeonatoDto } from "../../dto/campeonatoDto/update-campeonato.dto";
export declare class CampeonatoController {
    private readonly campeonatoService;
    constructor(campeonatoService: CampeonatoService);
    create(createCampeonatoDto: CreateCampeonatoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCampeonatoDto: UpdateCampeonatoDto): string;
    remove(id: string): string;
}
