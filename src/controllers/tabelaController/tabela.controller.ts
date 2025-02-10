import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TabelaService } from "../../services/tabelaService/tabela.service";
import { CreateTabelaDto } from "../../dto/tabelaDto/create-tabela.dto";
import { UpdateTabelaDto } from "../../dto/tabelaDto/update-tabela.dto";

@Controller("tabela")
export class TabelaController {
  constructor(private readonly tabelaService: TabelaService) {}

  @Post()
  create(@Body() createTabelaDto: CreateTabelaDto) {
    return this.tabelaService.create(createTabelaDto);
  }

  @Get()
  findAll() {
    return this.tabelaService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tabelaService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTabelaDto: UpdateTabelaDto) {
    return this.tabelaService.update(+id, updateTabelaDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tabelaService.remove(+id);
  }
}
