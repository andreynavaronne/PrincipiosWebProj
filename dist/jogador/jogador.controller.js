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
exports.JogadorController = void 0;
const common_1 = require("@nestjs/common");
const jogador_service_1 = require("./jogador.service");
const create_jogador_dto_1 = require("./dto/create-jogador.dto");
const update_jogador_dto_1 = require("./dto/update-jogador.dto");
let JogadorController = class JogadorController {
    constructor(jogadorService) {
        this.jogadorService = jogadorService;
    }
    create(createJogadorDto) {
        return this.jogadorService.create(createJogadorDto);
    }
    findAll() {
        return this.jogadorService.findAll();
    }
    findOne(id) {
        return this.jogadorService.findOne(+id);
    }
    update(id, updateJogadorDto) {
        return this.jogadorService.update(+id, updateJogadorDto);
    }
    remove(id) {
        return this.jogadorService.remove(+id);
    }
};
exports.JogadorController = JogadorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_jogador_dto_1.CreateJogadorDto]),
    __metadata("design:returntype", void 0)
], JogadorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JogadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogadorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_jogador_dto_1.UpdateJogadorDto]),
    __metadata("design:returntype", void 0)
], JogadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JogadorController.prototype, "remove", null);
exports.JogadorController = JogadorController = __decorate([
    (0, common_1.Controller)("jogador"),
    __metadata("design:paramtypes", [jogador_service_1.JogadorService])
], JogadorController);
//# sourceMappingURL=jogador.controller.js.map