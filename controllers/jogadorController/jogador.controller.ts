import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { JogadorService } from "../../services/jogadorService/jogador.service";
import { CreateJogadorDto } from "../../dto/jogadorDto/create-jogador.dto";
import { UpdateJogadorDto } from "../../dto/jogadorDto/update-jogador.dto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("jogador")
@Controller("jogador")
export class JogadorController {
  constructor(private readonly jogadorService: JogadorService) {}

  @Post()
  @ApiOperation({ summary: "Cria o jogador"})
  @ApiResponse({ status: 201, description: "Jogador criado com sucesso"})
  create(@Body() createJogadorDto: CreateJogadorDto) {
    return this.jogadorService.create(createJogadorDto);
  }

  @Get()
  @ApiOperation({ summary: "Listar todos os jogadores"})
  @ApiResponse({ status: 200, description: "Listagem de todos os jogadores"})
  @ApiResponse({ status: 404, description: "Jogadores não encontrados"})
  findAll() {
    return this.jogadorService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Mostra um jogador"})
  @ApiParam({ name: "id", description: "Id do jogador"})
  @ApiResponse({ status: 200, description: "Mostra um jogador"})
  @ApiResponse({ status: 404, description: "Jogador não encontrado"})
  findOne(@Param("id") id: string) {
    return this.jogadorService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualiza o jogador"})
  @ApiParam({ name: "id", description: "Id do jogador"})
  @ApiResponse({ status: 200, description: "Jogador atualizado com sucesso"})
  @ApiResponse({ status: 404, description: "Jogador não encontrado"})
  update(@Param("id") id: string, @Body() updateJogadorDto: UpdateJogadorDto) {
    return this.jogadorService.update(+id, updateJogadorDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deleta um jogador"})
  @ApiParam({ name: "id", description: "Id do jogador"})
  @ApiResponse({ status: 200, description: "Jogador deletado com sucesso"})
  @ApiResponse({ status: 404, description: "Jogador não encontrado"})
  remove(@Param("id") id: string) {
    return this.jogadorService.remove(+id);
  }
}
