import { Category } from "../../entities/category.entity";
import { CategoryModel } from "../schemas/category.schema";

export class CategoriesRepository {
    constructor(private model: typeof CategoryModel) {

    }

    async create({ title, color }: Category): Promise<Category> {
        const createdCategory = await this.model.create({ color, title })

        return createdCategory.toObject<Category>()
    }
}