import { Module } from "@nestjs/common";
import { CriadorService } from "./criador.service";
import { CriadorController } from "../4controllers/criadorController/criador.controller";

@Module({
  controllers: [CriadorController],
  providers: [CriadorService],
})
export class CriadorModule {}
