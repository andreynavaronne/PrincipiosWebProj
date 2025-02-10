import { PartialType } from "@nestjs/mapped-types";
import { CreateCriadorDto } from "./create-criador.dto";

export class UpdateCriadorDto extends PartialType(CreateCriadorDto) {}
