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


export class Transaction {
    public _id?: string
    public amount: number
    public date: Date
    public category: Category
    public type: TransactionType

    constructor({ _id, amount, date, category, type }: TransactionProps) {
        this._id = _id,
            this.amount = amount,
            this.date = date,
            this.category = category,
            this.type = type


    }
}