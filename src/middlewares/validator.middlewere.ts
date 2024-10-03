import { NextFunction, Request, Response } from "express"
import { ZodRawShape, z } from "zod"

export enum ParamsType {
    QUERY = 'query',
    BODY = 'body',
}

type ValidateParams = {
    schema: ZodRawShape
    type: ParamsType
}

export function Validator(params: ValidateParams) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = z.object(params.schema).safeParse(req[params.type])

        if (!result.success) {
            console.log(result.error.issues)
        }

        next()
    }
}