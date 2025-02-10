import { Module } from "@nestjs/common";
import { JogoService } from "./jogo.service";
import { JogoController } from "../4controllers/jogoController/jogo.controller";

@Module({
  controllers: [JogoController],
  providers: [JogoService],
})
export class JogoModule {}
