import { JogadorService } from "../../services/jogadorService/jogador.service";
import { CreateJogadorDto } from "../../dto/jogadorDto/create-jogador.dto";
import { UpdateJogadorDto } from "../../dto/jogadorDto/update-jogador.dto";
export declare class JogadorController {
    private readonly jogadorService;
    constructor(jogadorService: JogadorService);
    create(createJogadorDto: CreateJogadorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJogadorDto: UpdateJogadorDto): string;
    remove(id: string): string;
}
