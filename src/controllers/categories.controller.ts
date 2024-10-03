import { NextFunction, Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CreateCategoryDTO } from "../dtos/categories.dto";
import { z } from "zod";
import { StatusCodes } from "http-status-codes";
export class CategoriesController {
    async create(req: Request<unknown, unknown, CreateCategoryDTO>, res: Response, next: NextFunction) {

        try {
            const { title, color } = req.body

            const repository = new CategoriesRepository(CategoryModel)
            const service = new CategoriesService(repository)

            const result = await service.create({ title, color })

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }
}