import { getDBAdapter } from '../utils/db';
import { RuleContext } from '../validator';

export async function exists(value: any, _ctx: RuleContext, table: string, column: string): Promise<boolean> {
  const adapter = getDBAdapter();
  return adapter.exists(table, column, value);
}
