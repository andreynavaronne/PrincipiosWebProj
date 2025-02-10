import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JogadorModule } from './jogador/jogador.module';
import { TabelaModule } from './5models/tabela.module';
import { JogoModule } from './5models/jogo.module';
import { CriadorModule } from './5models/criador.module';
import { CampeonatoModule } from './5models/campeonato.module';

@Module({
  imports: [JogadorModule, TabelaModule, JogoModule, CriadorModule, CampeonatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
