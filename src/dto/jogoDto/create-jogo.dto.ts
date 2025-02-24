import { ApiProperty } from '@nestjs/swagger';

export class CreateJogoDto {

    @ApiProperty({ example: '12334', description: 'ID do Jogo' })
    id: number = 0;

    @ApiProperty({ example: '10', description: 'Número de jogadores do jogo' })
    numeroJogadores: number = 1;

    @ApiProperty({ example: 'Catan', description: 'Nome do jogo' })
    nome: string = '';

    @ApiProperty({ example: '100', description: 'Tempo de jogo' })
    tempoDeJogo: number = 0;

    @ApiProperty({ example: '10', description: 'Idade mínima para jogar' })
    idadeMinima: number = 0;
}
