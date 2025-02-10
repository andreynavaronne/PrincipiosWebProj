import { Module } from "@nestjs/common";
import { CriadorService } from "../services/criadorService/criador.service";
import { CriadorController } from "../controllers/criadorController/criador.controller";

@Module({
  controllers: [CriadorController],
  providers: [CriadorService],
})
export class CriadorModule {}
