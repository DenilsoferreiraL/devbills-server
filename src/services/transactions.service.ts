import { TransactionsRepository } from "../database/repositories/transactions.repository";

export class TransactionsService {
    constructor(private TransactionsRepository: TransactionsRepository) { }

    async create({ }: CreateTransactionDTO): Promise<Transaction> {

    }
}