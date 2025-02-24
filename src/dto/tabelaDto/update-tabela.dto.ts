import { PartialType } from "@nestjs/mapped-types";
import { CreateTabelaDto } from "./create-tabela.dto";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTabelaDto extends PartialType(CreateTabelaDto) {

    @ApiProperty({ example: '12334', description: 'ID da Tabela' })
    id: number = 0;

    @ApiProperty({ example: '10', description: 'ID do Campeonato' })
    campeonato_id: number = 0;

    @ApiProperty({ example: '100', description: 'ID do Jogo' })
    jogo_id: number = 0;
}
