import { PrismaClient } from '@prisma/client';
import { DBAdapter } from '../db';

export function createPrismaAdapter(prisma: PrismaClient): DBAdapter {
    return {
      async unique(table, column, value) {
        const result = await (prisma as any)[table].findFirst({ where: { [column]: value } });
        return !result;
      },
      async exists(table, column, value) {
        const result = await (prisma as any)[table].findFirst({ where: { [column]: value } });
        return !!result;
      },
    };
}