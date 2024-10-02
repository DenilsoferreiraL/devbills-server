import { CategoriesRepository } from "../database/repositories/categories.repository";
import { Category } from "../entities/category.entity";

export class CategoriesService {

    constructor(private categoriesRepository: CategoriesRepository) { }

    async create(): Promise<Category> {
        const category = new Category({
            title: 'Example Category',
            color: '#ff33bb'
        })

        const createCategory = await this.categoriesRepository.create(category)

        return createCategory
    }
}

