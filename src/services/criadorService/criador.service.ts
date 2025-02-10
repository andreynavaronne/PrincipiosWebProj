import { Injectable } from "@nestjs/common";
import { CreateCriadorDto } from "../../dto/criadorDto/create-criador.dto";
import { UpdateCriadorDto } from "../../dto/criadorDto/update-criador.dto";

@Injectable()
export class CriadorService {
  create(createCriadorDto: CreateCriadorDto) {
    return `This action adds a new criador with the following details: ${JSON.stringify(createCriadorDto)}`;
  }

  findAll() {
    return `This action returns all criador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criador`;
  }

  update(id: number, updateCriadorDto: UpdateCriadorDto) {
    return `This action updates a #${id} criador with the following details: ${JSON.stringify(updateCriadorDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} criador`;
  }
}
