"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCriadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_criador_dto_1 = require("./create-criador.dto");
class UpdateCriadorDto extends (0, mapped_types_1.PartialType)(create_criador_dto_1.CreateCriadorDto) {
}
exports.UpdateCriadorDto = UpdateCriadorDto;
//# sourceMappingURL=update-criador.dto.js.map