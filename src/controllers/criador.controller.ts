import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CriadorService } from "./criador.service";
import { CreateCriadorDto } from "./dto/create-criador.dto";
import { UpdateCriadorDto } from "./dto/update-criador.dto";

@Controller("criador")
export class CriadorController {
  constructor(private readonly criadorService: CriadorService) {}

  @Post()
  create(@Body() createCriadorDto: CreateCriadorDto) {
    return this.criadorService.create(createCriadorDto);
  }

  @Get()
  findAll() {
    return this.criadorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.criadorService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCriadorDto: UpdateCriadorDto) {
    return this.criadorService.update(+id, updateCriadorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.criadorService.remove(+id);
  }
}
