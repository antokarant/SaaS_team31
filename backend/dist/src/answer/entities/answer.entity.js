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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const typeorm_1 = require("typeorm");
const question_entity_1 = require("../../question/entities/question.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const comment_entity_1 = require("../../comment/entities/comment.entity");
let Answer = class Answer {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Answer.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Answer.prototype, "createdOn", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Answer.prototype, "updatedOn", void 0);
__decorate([
    typeorm_1.Column({ type: 'mediumtext' }),
    __metadata("design:type", String)
], Answer.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Answer.prototype, "upvotes", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Answer.prototype, "downvotes", void 0);
__decorate([
    typeorm_1.ManyToOne(() => question_entity_1.Question, question => question.answers, { nullable: true, onDelete: "CASCADE" }),
    typeorm_1.JoinColumn({ name: 'questionID' }),
    __metadata("design:type", question_entity_1.Question)
], Answer.prototype, "question", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, user => user.questions, { nullable: true, onDelete: "CASCADE" }),
    typeorm_1.JoinColumn({ name: 'userID' }),
    __metadata("design:type", user_entity_1.User)
], Answer.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(type => comment_entity_1.Comment, comment => comment.answer),
    __metadata("design:type", Array)
], Answer.prototype, "comments", void 0);
Answer = __decorate([
    typeorm_1.Entity()
], Answer);
exports.Answer = Answer;
//# sourceMappingURL=answer.entity.js.map