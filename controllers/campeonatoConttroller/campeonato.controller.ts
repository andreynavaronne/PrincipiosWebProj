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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("campeonato")
@Controller("campeonato")
export class CampeonatoController {
  constructor(private readonly campeonatoService: CampeonatoService) {}

  @Post()
  @ApiOperation({summary: "Criar o campeonato"})
  @ApiResponse({status: 201, description: "Campeonato criado com sucesso"})
  create(@Body() createCampeonatoDto: CreateCampeonatoDto) {
    return this.campeonatoService.create(createCampeonatoDto);
  }

  @Get()
  @ApiOperation({summary: "Listar todos os campeonatos"})
  @ApiResponse({status: 200, description: "Listagem de todos os campeonatos"})
  findAll() {
    return this.campeonatoService.findAll();
  }

  @Get(":id")
  @ApiOperation({summary: "Mostra um jogador"})
  @ApiParam({name: "id", description: "Id do jogador"})
  @ApiResponse({status: 200, description: "Mostra um jogador"})
  @ApiResponse({status: 404, description: "Jogador não encontrado"})
  findOne(@Param("id") id: string) {
    return this.campeonatoService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({summary: "Atualiza o campeonato"})
  @ApiParam({name: "id", description: "Id do campeonato"})
  @ApiResponse({status: 200, description: "Campeonato atualizado com sucesso"})
  @ApiResponse({status: 404, description: "Campeonato não encontrado"})
  update(
    @Param("id") id: string,
    @Body() updateCampeonatoDto: UpdateCampeonatoDto,
  ) {
    return this.campeonatoService.update(+id, updateCampeonatoDto);
  }

  @Delete(":id")
  @ApiOperation({summary: "Deleta um jogador"})
  @ApiParam({name: "id", description: "Id do jogador"})
  @ApiResponse({status: 200, description: "Jogador deletado com sucesso"})
  @ApiResponse({status: 404, description: "Jogador não encontrado"})
  remove(@Param("id") id: string) {
    return this.campeonatoService.remove(+id);
  }
}
