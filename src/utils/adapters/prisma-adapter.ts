import { DBAdapter } from '../db';

export function createPrismaAdapter(prisma: any): DBAdapter {
    return {
        async unique(table, column, value) {
            const model = (prisma as any)[table];
            if (!model || typeof model.findFirst !== 'function') {
                throw new Error(`Prisma model '${table}' not found`);
            }
            const result = await model.findFirst({ where: { [column]: value } });
            return !result;
        },
        async exists(table, column, value) {
            const model = (prisma as any)[table];
            if (!model || typeof model.findFirst !== 'function') {
                throw new Error(`Prisma model '${table}' not found`);
            }
            const result = await model.findFirst({ where: { [column]: value } });
            return !!result;
        },
    };
}

