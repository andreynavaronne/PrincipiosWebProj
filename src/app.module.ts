import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JogadorModule } from "./repository/jogador.module";
import { TabelaModule } from "./repository/tabela.module";
import { JogoModule } from "./repository/jogo.module";
import { CriadorModule } from "./repository/criador.module";
import { CampeonatoModule } from "./repository/campeonato.module";

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
