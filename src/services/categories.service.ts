import { Category } from "../entities/category.entity";

export class CategoriesService {
    async create(): Promise<Category> {
        const category = new Category({
            title: 'Example Category',
            color: '#ff33bb'
        })

        return category
    }
}

