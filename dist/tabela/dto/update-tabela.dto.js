"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTabelaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tabela_dto_1 = require("./create-tabela.dto");
class UpdateTabelaDto extends (0, mapped_types_1.PartialType)(create_tabela_dto_1.CreateTabelaDto) {
}
exports.UpdateTabelaDto = UpdateTabelaDto;
//# sourceMappingURL=update-tabela.dto.js.map