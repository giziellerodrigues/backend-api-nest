import { Repository } from 'typeorm';
import { Categoria } from 'src/models/categoria.model';
export declare class CategoriaController {
    private categoriaRepo;
    constructor(categoriaRepo: Repository<Categoria>);
    test(): string;
    index(): Promise<Categoria[]>;
    show(id: string): Promise<Categoria>;
    store(body: Categoria): Promise<Categoria>;
}
