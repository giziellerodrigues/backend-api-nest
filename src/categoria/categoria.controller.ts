import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categoria } from 'src/models/categoria.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoriaController {
    
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepo: Repository<Categoria>
    ) {

    }

    @Get('/health')
    test() {
        return "Run"
    }

    @Get()
    async index() : Promise<Categoria[]> {
        return this.categoriaRepo.find()
    }

    @Get(':id')
    async show(@Param('id') id: string): Promise<Categoria> {
        return this.categoriaRepo.findOneOrFail(id)
    }

    @Post()
    async store(@Body() body: Categoria): Promise<Categoria> {
        const categoria = this.categoriaRepo.create(body)
        return this.categoriaRepo.save(categoria)
    }
}
