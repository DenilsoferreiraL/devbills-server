import { Category } from "./category.entity"

export enum TransactionType {
    INCOME = 'income',
    EXPENSE = 'expense'
}
type TransactionProps = {
    _id?: string,
    amount: number,
    date: Date,
    category: Category,
    type: TransactionType
}


