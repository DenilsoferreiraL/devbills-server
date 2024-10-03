import { Router } from "express";
import { CategoriesController } from "../controllers/categories.controller";
import { ParamsType, Validator } from "../middlewares/validator.middlewere";
import { createCategorySchema } from "../dtos/categories.dto";

export const categoriesRoutes = Router()

const controller = new CategoriesController

categoriesRoutes.post('/', Validator({
    schema: createCategorySchema,
    type: ParamsType.BODY
}), controller.create)