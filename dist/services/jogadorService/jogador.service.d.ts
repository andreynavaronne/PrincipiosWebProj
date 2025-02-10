import { CreateJogadorDto } from "../../dto/jogadorDto/create-jogador.dto";
import { UpdateJogadorDto } from "../../dto/jogadorDto/update-jogador.dto";
export declare class JogadorService {
    create(createJogadorDto: CreateJogadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJogadorDto: UpdateJogadorDto): string;
    remove(id: number): string;
}
