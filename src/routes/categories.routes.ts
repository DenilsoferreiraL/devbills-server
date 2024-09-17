import { Router } from "express";
import { CategoryiesController } from "../controllers/categories.controller";

export const categoriesRoutes = Router()

const controller = new CategoryiesController

categoriesRoutes.post('/', controller.create)