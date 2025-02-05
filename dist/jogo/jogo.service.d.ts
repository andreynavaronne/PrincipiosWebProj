import { CreateJogoDto } from "./dto/create-jogo.dto";
import { UpdateJogoDto } from "./dto/update-jogo.dto";
export declare class JogoService {
    create(createJogoDto: CreateJogoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateJogoDto: UpdateJogoDto): string;
    remove(id: number): string;
}
