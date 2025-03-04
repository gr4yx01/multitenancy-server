import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
    constructor() {}

    async use(req: Request, res: Response, next: NextFunction) {
        // get tenant id
        const tenantId = req.headers['x-tenant-id']?.toString()

        if(!tenantId) {
            throw new BadRequestException('X-TENANT-ID not provided')
        }

        req['tenantId'] = tenantId

        next()
    }
} 