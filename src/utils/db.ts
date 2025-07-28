export type DBAdapter = {
    unique(table: string, column: string, value: any): Promise<boolean>;
    exists(table: string, column: string, value: any): Promise<boolean>;
};
  
let dbAdapter: DBAdapter;

export function setDBAdapter(adapter: DBAdapter) {
    dbAdapter = adapter;
}
export function getDBAdapter(): DBAdapter {
    if (!dbAdapter) {
        throw new Error('DB adapter not set. Call setDBAdapter() before using validate().');
    }
    return dbAdapter;
}