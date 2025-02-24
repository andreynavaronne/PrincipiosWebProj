import { ApiProperty } from '@nestjs/swagger';

export class CreateCriadorDto {

    @ApiProperty({example: "1", description: "ID do criador"})
    id: number = 0;

    @ApiProperty({example: "John", description: "Nome do criador"})
    nome: string = '';

    @ApiProperty({example: "Doe", description: "Sobrenome do criador"})
    sobrenome: string = '';

    @ApiProperty({example: "25", description: "Idade do criador"})
    idade: number = 0;

    @ApiProperty({example: "100", description: "Pontos do criador"})
    pontos: number = 0;

    @ApiProperty({example: "1", description: "ID da tabela"})
    tabela_id: number = 0;
}
