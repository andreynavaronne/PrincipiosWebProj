import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JogadorModule } from "./models/jogador.module";
import { TabelaModule } from "./models/tabela.module";
import { JogoModule } from "./models/jogo.module";
import { CriadorModule } from "./models/criador.module";
import { CampeonatoModule } from "./models/campeonato.module";

@Module({
  imports: [
    JogadorModule,
    TabelaModule,
    JogoModule,
    CriadorModule,
    CampeonatoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
