import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { JogoService } from "../../services/jogoService/jogo.service";
import { CreateJogoDto } from "../../dto/jogoDto/create-jogo.dto";
import { UpdateJogoDto } from "../../dto/jogoDto/update-jogo.dto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("jogo")
@Controller("jogo")
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Post()
  @ApiOperation({ summary: "Cria Jogo"})
  @ApiResponse({ status: 201, description: "Jogo criado."})
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogoService.create(createJogoDto);
  }

  @Get()
  @ApiOperation({ summary: "Lista Jogos"})
  @ApiResponse({ status: 200, description: "Lista de jogos."})
  @ApiResponse({ status: 404, description: "Nenhum jogo encontrado."})
  findAll() {
    return this.jogoService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Busca Jogo"})
  @ApiParam({ name: "id", description: "Id do jogo."})
  @ApiResponse({ status: 200, description: "Jogo encontrado."})
  @ApiResponse({ status: 404, description: "Jogo não encontrado."})
  findOne(@Param("id") id: string) {
    return this.jogoService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualiza Jogo"})
  @ApiParam({ name: "id", description: "Id do jogo."})
  @ApiResponse({ status: 200, description: "Jogo atualizado."})
  @ApiResponse({ status: 404, description: "Jogo não encontrado."})
  update(@Param("id") id: string, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogoService.update(+id, updateJogoDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove Jogo"})
  @ApiParam({ name: "id", description: "Id do jogo."})
  @ApiResponse({ status: 200, description: "Jogo removido."})
  @ApiResponse({ status: 404, description: "Jogo não encontrado."})
  remove(@Param("id") id: string) {
    return this.jogoService.remove(+id);
  }
}
