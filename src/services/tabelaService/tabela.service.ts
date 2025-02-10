import { Injectable } from "@nestjs/common";
import { CreateTabelaDto } from "../../dto/tabelaDto/create-tabela.dto";
import { UpdateTabelaDto } from "../../dto/tabelaDto/update-tabela.dto";

@Injectable()
export class TabelaService {
  create(createTabelaDto: CreateTabelaDto) {
    return `This action adds a new tabela with the following details: ${JSON.stringify(createTabelaDto)}`;
  }

  findAll() {
    return `This action returns all tabela`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabela`;
  }

  update(id: number, updateTabelaDto: UpdateTabelaDto) {
    return `This action updates a #${id} tabela with the following details: ${JSON.stringify(updateTabelaDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabela`;
  }
}
