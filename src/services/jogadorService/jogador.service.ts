import { Injectable } from "@nestjs/common";
import { CreateJogadorDto } from "../../dto/jogadorDto/create-jogador.dto";
import { UpdateJogadorDto } from "../../dto/jogadorDto/update-jogador.dto";

@Injectable()
export class JogadorService {
  create(createJogadorDto: CreateJogadorDto) {
    return `This action adds a new jogador with the following details: ${JSON.stringify(createJogadorDto)}`;
  }

  findAll() {
    return `This action returns all jogador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogador`;
  }

  update(id: number, updateJogadorDto: UpdateJogadorDto) {
    return `This action updates a #${id} jogador with the following details: ${JSON.stringify(updateJogadorDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogador`;
  }
}
