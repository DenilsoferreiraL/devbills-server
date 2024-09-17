import { Router } from "express";
import { baseRoutes } from "./base.route";
import { categoriesRoutes } from "./categories.routes";


export const routes = Router()

routes.use('/', baseRoutes)
routes.use('/categories', categoriesRoutes)
