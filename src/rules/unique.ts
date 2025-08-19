import { getDBAdapter } from '../utils/db';
import { RuleContext } from '../validator';

export async function unique(value: any, _ctx: RuleContext, table: string, column: string): Promise<boolean> {
  const adapter = getDBAdapter();
  return adapter.unique(table, column, value);
}