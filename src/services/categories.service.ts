import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { Category } from "../entities/category.entity";

export class CategoriesService {

    constructor(private categoriesRepository: CategoriesRepository) { }

    async create({ title, color }: CreateCategoryDTO): Promise<Category> {
        const foundCategory = await this.categoriesRepository.findByTitle(title)

        if (foundCategory) {
            throw new Error('Category already exists')
        }
        const category = new Category({
            title,
            color
        })

        const createCategory = await this.categoriesRepository.create(category)

        return createCategory
    }
}

