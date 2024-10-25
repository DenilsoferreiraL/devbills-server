import { Router } from "express"
import { ParamsType, Validator } from "../middlewares/validator.middleware"
import { createTransactionSchema, getDashboardSchema } from "../dtos/transactions.dto"
import { TransactionController } from "../controllers/transactions.controller"
import { TransactionsFactory } from "../factories/transactions.factory"


export const tranasctionsRoutes = Router()

const controller = new TransactionController(
    TransactionsFactory.getServiceInstance()
)

tranasctionsRoutes.post('/', Validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY
}), controller.create)

tranasctionsRoutes.get('/', controller.index)

tranasctionsRoutes.get('/', Validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY
}), controller.getDashboard)
