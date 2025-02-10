import { Module } from "@nestjs/common";
import { CriadorService } from "./criador.service";
import { CriadorController } from "./criador.controller";

@Module({
  controllers: [CriadorController],
  providers: [CriadorService],
})
export class CriadorModule {}
