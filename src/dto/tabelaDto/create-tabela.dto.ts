import { ApiProperty } from '@nestjs/swagger';

export class CreateTabelaDto {

    @ApiProperty({ example: '12334', description: 'ID da Tabela' })
    id: number = 0;
  
    @ApiProperty({ example: '10', description: 'ID do Campeonato' })
    campeonato_id: number = 0;

    @ApiProperty({ example: '100', description: 'ID do Jogo' })
    jogo_id: number = 0;
}
