import { Injectable } from "@nestjs/common";
import { CreateJogoDto } from "../../dto/jogoDto/create-jogo.dto";
import { UpdateJogoDto } from "../../dto/jogoDto/update-jogo.dto";

@Injectable()
export class JogoService {
  create(createJogoDto: CreateJogoDto) {
    return `This action adds a new jogo with the following details: ${JSON.stringify(createJogoDto)}`;
  }

  findAll() {
    return `This action returns all jogo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jogo`;
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    return `This action updates a #${id} jogo with the following details: ${JSON.stringify(updateJogoDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogo`;
  }
}
