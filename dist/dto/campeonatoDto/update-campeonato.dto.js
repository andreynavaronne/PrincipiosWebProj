"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCampeonatoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_campeonato_dto_1 = require("./create-campeonato.dto");
class UpdateCampeonatoDto extends (0, mapped_types_1.PartialType)(create_campeonato_dto_1.CreateCampeonatoDto) {
}
exports.UpdateCampeonatoDto = UpdateCampeonatoDto;
//# sourceMappingURL=update-campeonato.dto.js.map