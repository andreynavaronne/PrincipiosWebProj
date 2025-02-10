import { JogoService } from "../../services/jogoService/jogo.service";
import { CreateJogoDto } from "../../dto/jogoDto/create-jogo.dto";
import { UpdateJogoDto } from "../../dto/jogoDto/update-jogo.dto";
export declare class JogoController {
    private readonly jogoService;
    constructor(jogoService: JogoService);
    create(createJogoDto: CreateJogoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateJogoDto: UpdateJogoDto): string;
    remove(id: string): string;
}
