import { Request, Response } from "express";
import { CategoryService } from "../services/categories.service";


export class CategoryiesController {
    async create(_: Request, res: Response) {
        const service = new CategoryService()

        const result = await service.create()

        return res.status(201).json(result)
    }
}