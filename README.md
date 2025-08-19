# ValidatorShield

Universal validation for frontend and backend with TypeScript. Includes common rules for browser/Node, plus DB-backed async rules `unique` and `exists` for server-side checks with Sequelize or Prisma.

## ✅ Features
- TypeScript compatible (types shipped)
- Frontend and backend rule set
- DB-backed rules via Sequelize adapter: `unique`, `exists`

## 🔧 Usage

```ts
import { validate, setDBAdapter, createSequelizeAdapter } from 'validatorshield';

// Backend only: set adapter once during app boot
// setDBAdapter(createSequelizeAdapter(sequelizeInstance));

const data = {
  email: 'admin@example.com',
  password: 'secret123',
  password_confirmation: 'secret123',
};

const rules = {
  email: ['required', 'email'], // add 'unique:users,email' on backend
  password: ['required', 'min:6', 'confirmed'],
};

const result = await validate(data, rules);

if (!result.passed) {
  console.log(result.errors);
}
```

## Rules

- required, email, string, number, integer, boolean, array
- min, max, between, size
- url, regex
- in, not_in
- same, different, confirmed
- unique:table,column (backend; requires adapter)
- exists:table,column (backend; requires adapter)

## Backend setup (Sequelize)

```ts
import { setDBAdapter, createSequelizeAdapter } from 'validatorshield';
setDBAdapter(createSequelizeAdapter(sequelize));
```

### Backend setup (Prisma)

```ts
import { setDBAdapter, createPrismaAdapter } from 'validatorshield';
setDBAdapter(createPrismaAdapter(prisma));
```

## API

- `validate(data, rules)` → `{ passed: boolean; errors: Record<string, string[]> }`
- `setDBAdapter(adapter)` to enable `unique`/`exists`
- `createSequelizeAdapter(sequelize)` to build the adapter

## License

MIT


