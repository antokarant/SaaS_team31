import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';
import { User } from '../user/entities/user.entity';
import { Answer } from '../answer/entities/answer.entity';
import { Keyword } from '../keyword/entities/keyword.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(@InjectEntityManager() private manager: EntityManager) {}

    async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        return this.manager.transaction(async manager => {
            const userID = createQuestionDto.user.id;
            if(!userID) throw new BadRequestException('User id missing.');
            const user = await this.manager.findOne(User, createQuestionDto.user.id);
            if(!user) throw new NotFoundException(`User ${userID} not found.`);

            let keywordList = [];
            for(const kw of createQuestionDto.keywords)
            {
                const keywordName = kw.name;
                if(!keywordName) throw new BadRequestException('Keyword name missing.');
                const keyword = await this.manager.findOne(Keyword, keywordName);
                if(!keyword) throw new NotFoundException(`Keyword ${keywordName} not found.`);
                keywordList.push(keyword);
            }

            const question = await this.manager.create(Question, createQuestionDto);
            question.user = user;
            question.keywords = keywordList;
            return this.manager.save(question);
        });
    }

    async findAllUser(id) {
        const result = await this.manager.createQueryBuilder('question', 'question')
        .leftJoinAndSelect('question.user', 'user')
        .leftJoinAndSelect('question.answers', 'answers')
        .leftJoinAndSelect('question.keywords', 'keywords')
        .where('question.userID = :id', {id})
        .orderBy('question.createdOn', 'DESC')
        .getMany()
        //return this.manager.find(Question, { relations: ["user", "keyword"] });
        return result;
    }

    async findAll() {
        const result = await this.manager.find(Question, {relations: ["user", "answers", "keywords"]})
        //return this.manager.find(Question, { relations: ["user", "keyword"] });
        return result;
    }

    async findOne(id: number): Promise<Question> {
        let question = await this.manager.findOne(Question, id, { relations: ["user", "keywords", "answers"] });
        if(!question) throw new NotFoundException(`Question ${id} not found.`);
        for(let a in question.answers)
        {
            const answer = await this.manager.findOne(Answer, question.answers[a].id, {relations: ["user"]});
            question.answers[a] = answer;
        }

        return question;
    }

    async update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        return this.manager.transaction(async manager => {
            const question = await manager.findOne(Question, id, { relations: ["user", "keywords"] });
            if(!question) throw new NotFoundException(`Question ${id} not found.`);
            manager.merge(Question, question, updateQuestionDto);
            return manager.save(question);
        });
    }

    async remove(id: number): Promise<void> {
        return this.manager.transaction(async manager => {
            const question = await manager.findOne(Question, id);
            if(!question) throw new NotFoundException(`Question ${id} not found.`);
            await manager.delete(Question, id);
        });
    }
}