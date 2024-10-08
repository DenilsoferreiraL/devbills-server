import { Transaction } from "../../entities/transactions.entity"
import { TransactionModel } from "../schemas/transactions.schema"

export class TransactionsRepository {
    constructor(private model: typeof TransactionModel) {

    }

    async create({ title, date, amount, category }: Transaction): Promise<Transaction> {
        const createdTransaction = await this.model.create({ title, date, amount, category })

        return createdTransaction.toObject<Transaction>()

    }

    async index(): Promise<Transaction[]> {
        const transactions = await this.model.find()

        const transactionsMap = transactions.map((item) => item.toObject<Transaction>())

        return transactionsMap
    }
}