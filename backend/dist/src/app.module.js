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
const question_module_1 = require("./question/question.module");
const typeorm_1 = require("@nestjs/typeorm");
const answer_module_1 = require("./answer/answer.module");
const user_module_1 = require("./user/user.module");
const keyword_module_1 = require("./keyword/keyword.module");
const comment_module_1 = require("./comment/comment.module");
const auth_module_1 = require("./auth.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            question_module_1.QuestionModule,
            typeorm_1.TypeOrmModule.forRoot(),
            answer_module_1.AnswerModule,
            user_module_1.UserModule,
            keyword_module_1.KeywordModule,
            comment_module_1.CommentModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map