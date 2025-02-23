import { ApiProperty } from '@nestjs/swagger';


export class CreateCampeonatoDto {
    @ApiProperty({ example: '12334', description: 'ID do Campeonato' })
    id: number = 0;
  
    @ApiProperty({ example: '10', description: 'Número de jogadores do campeonato' })
    numeroJogadores: number = 1;

    @ApiProperty({ example: '100', description: 'Total de pontos do campeonato' })
    totalPontos: number = 0;

    @ApiProperty({ example: 'John Doe', description: 'Líder do campeonato' })
    liderCampeonato: string = '';

    @ApiProperty({ example: '1', description: 'ID do dono do campeonato' })
    dono_id: number = 0;
}
