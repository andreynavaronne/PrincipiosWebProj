import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CampeonatoService } from "../../services/campeonatoService/campeonato.service";
import { CreateCampeonatoDto } from "../../dto/campeonatoDto/create-campeonato.dto";
import { UpdateCampeonatoDto } from "../../dto/campeonatoDto/update-campeonato.dto";

@Controller("campeonato")
export class CampeonatoController {
  constructor(private readonly campeonatoService: CampeonatoService) {}

  @Post()
  create(@Body() createCampeonatoDto: CreateCampeonatoDto) {
    return this.campeonatoService.create(createCampeonatoDto);
  }

  @Get()
  findAll() {
    return this.campeonatoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.campeonatoService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCampeonatoDto: UpdateCampeonatoDto,
  ) {
    return this.campeonatoService.update(+id, updateCampeonatoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.campeonatoService.remove(+id);
  }
}
