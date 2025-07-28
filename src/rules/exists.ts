import { getDBAdapter } from '../utils/db';

export async function exists(value: any, table: string, column: string): Promise<boolean> {
  const adapter = getDBAdapter();
  return adapter.exists(table, column, value);
}
