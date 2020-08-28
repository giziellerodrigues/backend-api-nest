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
exports.CategoriaController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const categoria_model_1 = require("../models/categoria.model");
const typeorm_2 = require("@nestjs/typeorm");
let CategoriaController = class CategoriaController {
    constructor(categoriaRepo) {
        this.categoriaRepo = categoriaRepo;
    }
    test() {
        return "Run";
    }
    async index() {
        return this.categoriaRepo.find();
    }
    async show(id) {
        return this.categoriaRepo.findOneOrFail(id);
    }
    async store(body) {
        const categoria = this.categoriaRepo.create(body);
        return this.categoriaRepo.save(categoria);
    }
};
__decorate([
    common_1.Get('/health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoriaController.prototype, "test", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "index", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "show", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categoria_model_1.Categoria]),
    __metadata("design:returntype", Promise)
], CategoriaController.prototype, "store", null);
CategoriaController = __decorate([
    common_1.Controller('categories'),
    __param(0, typeorm_2.InjectRepository(categoria_model_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriaController);
exports.CategoriaController = CategoriaController;
//# sourceMappingURL=categoria.controller.js.map