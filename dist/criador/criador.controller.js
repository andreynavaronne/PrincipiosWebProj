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
exports.CriadorController = void 0;
const common_1 = require("@nestjs/common");
const criador_service_1 = require("./criador.service");
const create_criador_dto_1 = require("./dto/create-criador.dto");
const update_criador_dto_1 = require("./dto/update-criador.dto");
let CriadorController = class CriadorController {
    constructor(criadorService) {
        this.criadorService = criadorService;
    }
    create(createCriadorDto) {
        return this.criadorService.create(createCriadorDto);
    }
    findAll() {
        return this.criadorService.findAll();
    }
    findOne(id) {
        return this.criadorService.findOne(+id);
    }
    update(id, updateCriadorDto) {
        return this.criadorService.update(+id, updateCriadorDto);
    }
    remove(id) {
        return this.criadorService.remove(+id);
    }
};
exports.CriadorController = CriadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_criador_dto_1.CreateCriadorDto]),
    __metadata("design:returntype", void 0)
], CriadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CriadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_criador_dto_1.UpdateCriadorDto]),
    __metadata("design:returntype", void 0)
], CriadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriadorController.prototype, "remove", null);
exports.CriadorController = CriadorController = __decorate([
    (0, common_1.Controller)("criador"),
    __metadata("design:paramtypes", [criador_service_1.CriadorService])
], CriadorController);
//# sourceMappingURL=criador.controller.js.map