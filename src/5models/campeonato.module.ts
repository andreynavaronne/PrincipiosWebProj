import { Module } from "@nestjs/common";
import { CampeonatoService } from "../3services/campeonatoService/campeonato.service";
import { CampeonatoController } from "../4controllers/campeonatoConttroller/campeonato.controller";

@Module({
  controllers: [CampeonatoController],
  providers: [CampeonatoService],
})
export class CampeonatoModule {}
