type ExpenseProps = {
    _id?: string
    title: string
    color: string
    amount: string
}

export class Expense {
    public _id?: string
    public title: string
    public color: string
    public amount: string

    constructor({ _id, title, color, amount }: ExpenseProps) {
        this._id = _id
        this.title = title
        this.color = color
        this.amount = amount
    }
}
