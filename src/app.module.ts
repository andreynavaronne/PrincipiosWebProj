import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JogadorModule } from './jogador/jogador.module';
import { TabelaModule } from './tabela/tabela.module';
import { JogoModule } from './jogo/jogo.module';
import { CriadorModule } from './criador/criador.module';
import { CampeonatoModule } from './campeonato/campeonato.module';

@Module({
  imports: [JogadorModule, TabelaModule, JogoModule, CriadorModule, CampeonatoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
