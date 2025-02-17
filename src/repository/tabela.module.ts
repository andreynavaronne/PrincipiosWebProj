import { Module } from "@nestjs/common";
import { TabelaService } from "../services/tabelaService/tabela.service";
import { TabelaController } from "../controllers/tabelaController/tabela.controller";

@Module({
  controllers: [TabelaController],
  providers: [TabelaService],
})
export class TabelaModule {}
