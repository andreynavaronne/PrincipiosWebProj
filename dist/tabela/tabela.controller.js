"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabelaController = void 0;
const common_1 = require("@nestjs/common");
const tabela_service_1 = require("./tabela.service");
const create_tabela_dto_1 = require("./dto/create-tabela.dto");
const update_tabela_dto_1 = require("./dto/update-tabela.dto");
let TabelaController = class TabelaController {
    constructor(tabelaService) {
        this.tabelaService = tabelaService;
    }
    create(createTabelaDto) {
        return this.tabelaService.create(createTabelaDto);
    }
    findAll() {
        return this.tabelaService.findAll();
    }
    findOne(id) {
        return this.tabelaService.findOne(+id);
    }
    update(id, updateTabelaDto) {
        return this.tabelaService.update(+id, updateTabelaDto);
    }
    remove(id) {
        return this.tabelaService.remove(+id);
    }
};
exports.TabelaController = TabelaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tabela_dto_1.CreateTabelaDto]),
    __metadata("design:returntype", void 0)
], TabelaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TabelaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TabelaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tabela_dto_1.UpdateTabelaDto]),
    __metadata("design:returntype", void 0)
], TabelaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TabelaController.prototype, "remove", null);
exports.TabelaController = TabelaController = __decorate([
    (0, common_1.Controller)('tabela'),
    __metadata("design:paramtypes", [tabela_service_1.TabelaService])
], TabelaController);
//# sourceMappingURL=tabela.controller.js.map