import { Module } from "@nestjs/common";
import { JogadorService } from "../3services/jogadorService/jogador.service";
import { JogadorController } from "../4controllers/jogadorController/jogador.controller";

@Module({
  controllers: [JogadorController],
  providers: [JogadorService],
})
export class JogadorModule {}
