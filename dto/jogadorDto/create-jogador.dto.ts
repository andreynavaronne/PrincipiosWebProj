import { ApiProperty } from '@nestjs/swagger';

export class CreateJogadorDto {
    @ApiProperty({ example: '12334', description: 'ID do Jogador' })
    id: number = 0;
  
    @ApiProperty({ example: 'John', description: 'Nome do jogador' })
    nome: string = '';

    @ApiProperty({ example: 'Doe', description: 'Sobrenome do jogador' })
    sobrenome: string = '';

    @ApiProperty({ example: '20', description: 'Idade do jogador' })
    idade: number = 0;

    @ApiProperty({ example: '100', description: 'Pontos do jogador' })
    pontos: number = 0;

    @ApiProperty({ example: '1', description: 'ID da tabela do jogador' })
    tabela_id: number = 0;    
}
