import { z } from "zod"

export const createTransactionsSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.string(),
    data: z.coerce.date(),
    categoryId: z.string()
}

