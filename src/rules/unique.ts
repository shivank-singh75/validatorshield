import { getDBAdapter } from '../utils/db';

export async function unique(value: any, table: string, column: string): Promise<boolean> {
  const adapter = getDBAdapter();
  return adapter.unique(table, column, value);
}