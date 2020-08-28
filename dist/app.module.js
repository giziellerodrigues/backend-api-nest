"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_model_1 = require("./models/categoria.model");
const config_1 = require("@nestjs/config");
const categoria_controller_1 = require("./categoria/categoria.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.TYPEORM_CONNECTION,
                host: process.env.TYPEORM_HOST,
                port: parseInt(process.env.TYPEORM_PORT),
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [categoria_model_1.Categoria],
            }),
            typeorm_1.TypeOrmModule.forFeature([categoria_model_1.Categoria])
        ],
        controllers: [app_controller_1.AppController, categoria_controller_1.CategoriaController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map