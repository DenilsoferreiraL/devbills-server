import { Router } from "express"
import { ParamsType, Validator } from "../middlewares/validator.middleware"
import { createTransactionSchema, getDashboardSchema, getFinancialEvolutionSchema, indexTransactionSchema } from "../dtos/transactions.dto"
import { TransactionController } from "../controllers/transactions.controller"
import { TransactionsFactory } from "../factories/transactions.factory"


export const transactionsRoutes = Router()

const controller = new TransactionController(
    TransactionsFactory.getServiceInstance()
)

transactionsRoutes.post('/', Validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY
}), controller.create)

transactionsRoutes.get('/', Validator({
    schema: indexTransactionSchema,
    type: ParamsType.QUERY
}), controller.index)

transactionsRoutes.get('/dashboard', Validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY
}), controller.getDashboard)

transactionsRoutes.get('/financial-evolution', Validator({
    schema: getFinancialEvolutionSchema,
    type: ParamsType.QUERY
}), controller.getFinancialEvolution)
