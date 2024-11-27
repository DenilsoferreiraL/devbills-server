import { Router } from "express";
import { baseRoutes } from "./base.route";
import { categoriesRoutes } from "./categories.routes";
import { transactionsRoutes } from "./transactions.routes";


export const routes = Router()

routes.use('/', baseRoutes)
routes.use('/categories', categoriesRoutes)
routes.use('/transactions', transactionsRoutes)
