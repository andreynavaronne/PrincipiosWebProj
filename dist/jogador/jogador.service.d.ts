import { CreateJogadorDto } from "./dto/create-jogador.dto";
import { UpdateJogadorDto } from "./dto/update-jogador.dto";
export declare class JogadorService {
    create(createJogadorDto: CreateJogadorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJogadorDto: UpdateJogadorDto): string;
    remove(id: number): string;
}
