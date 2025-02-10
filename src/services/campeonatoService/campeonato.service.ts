import { Injectable } from "@nestjs/common";
import { CreateCampeonatoDto } from "../../dto/campeonatoDto/create-campeonato.dto"; // Ensure this path is correct
import { UpdateCampeonatoDto } from "../../dto/campeonatoDto/update-campeonato.dto"; // Ensure this path is correct

@Injectable()
export class CampeonatoService {
  create(createCampeonatoDto: CreateCampeonatoDto) {
    return `This action adds a new campeonato with the following details: ${JSON.stringify(createCampeonatoDto)}`;
  }

  findAll() {
    return `This action returns all campeonato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campeonato`;
  }

  update(id: number, updateCampeonatoDto: UpdateCampeonatoDto) {
    return `This action updates a #${id} campeonato with the following details: ${JSON.stringify(updateCampeonatoDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} campeonato`;
  }
}
