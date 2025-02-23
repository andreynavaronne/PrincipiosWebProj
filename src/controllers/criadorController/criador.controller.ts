import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CriadorService } from "../../services/criadorService/criador.service";
import { CreateCriadorDto } from "../../dto/criadorDto/create-criador.dto";
import { UpdateCriadorDto } from "../../dto/criadorDto/update-criador.dto";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("criador")
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
