import { Sequelize } from 'sequelize';
import { DBAdapter } from '../db';

export function createSequelizeAdapter(sequelize: Sequelize): DBAdapter {
  return {
    async unique(table, column, value) {
      const [results] = await sequelize.query(`SELECT * FROM ${table} WHERE ${column} = ? LIMIT 1`, {
        replacements: [value],
      });
      return (results as any[]).length === 0;
    },
    async exists(table, column, value) {
      const [results] = await sequelize.query(`SELECT * FROM ${table} WHERE ${column} = ? LIMIT 1`, {
        replacements: [value],
      });
      return (results as any[]).length > 0;
    },
  };
}