import { PartialType } from "@nestjs/mapped-types";
import { CreateCampeonatoDto } from "./create-campeonato.dto";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCampeonatoDto extends PartialType(CreateCampeonatoDto) {

    @ApiProperty({ example: '12344', description: 'ID do campeonato', required: false })
  id?: number;

    @ApiProperty({ example: '10', description: 'Número de jogadores do campeonato', required: false })
  numeroJogadores?: number;

    @ApiProperty({ example: '100', description: 'Total de pontos do campeonato', required: false })
  totalPontos?: number;

    @ApiProperty({ example: 'John Doe', description: 'Líder do campeonato', required: false })
  liderCampeonato?: string;

    @ApiProperty({ example: '1', description: 'ID do dono do campeonato', required: false })
  dono_id?: number;  

}
