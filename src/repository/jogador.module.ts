import { Module } from "@nestjs/common";
import { JogadorService } from "../services/jogadorService/jogador.service";
import { JogadorController } from "../controllers/jogadorController/jogador.controller";

@Module({
  controllers: [JogadorController],
  providers: [JogadorService],
})
export class JogadorModule {}
