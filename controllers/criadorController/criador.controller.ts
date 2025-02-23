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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("criador")
@Controller("criador")
export class CriadorController {
  constructor(private readonly criadorService: CriadorService) {}

  @Post()
  @ApiOperation({ summary: "Cria o criador"})
  @ApiResponse({ status: 201, description: "Criador criado com sucesso"})
  create(@Body() createCriadorDto: CreateCriadorDto) {
    return this.criadorService.create(createCriadorDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os jogadores"})
  @ApiResponse({ status: 200, description: "Listagem de todos os jogadores"})
  @ApiResponse({ status: 404, description: "Jogadores não encontrados"})
  findAll() {
    return this.criadorService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Mostra um jogador"})
  @ApiParam({ name: "id", description: "Id do jogador"})
  @ApiResponse({ status: 200, description: "Mostra um jogador"})
  @ApiResponse({ status: 404, description: "Jogador não encontrado"})
  findOne(@Param("id") id: string) {
    return this.criadorService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualiza o criador"})
  @ApiParam({ name: "id", description: "Id do criador"})
  @ApiResponse({ status: 200, description: "Criador atualizado com sucesso"})
  @ApiResponse({ status: 404, description: "Criador não encontrado"})
  update(@Param("id") id: string, @Body() updateCriadorDto: UpdateCriadorDto) {
    return this.criadorService.update(+id, updateCriadorDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deleta um jogador"})
  @ApiParam({ name: "id", description: "Id do jogador"})
  @ApiResponse({ status: 200, description: "Jogador deletado com sucesso"})
  @ApiResponse({ status: 404, description: "Jogador não encontrado"})
  remove(@Param("id") id: string) {
    return this.criadorService.remove(+id);
  }
}
