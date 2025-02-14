import { Module } from "@nestjs/common";
import { CampeonatoService } from "../services/campeonatoService/campeonato.service";
import { CampeonatoController } from "../controllers/campeonatoConttroller/campeonato.controller";

@Module({
  controllers: [CampeonatoController],
  providers: [CampeonatoService],
})
export class CampeonatoModule {}
