# ValidatorShield

A validation library for Node.js and TypeScript, with support for rules like `required`, `email`, `min`, `max`, `unique`, and `exists`.

## ✅ Features
- TypeScript compatible
- Customizable rule engine
- Database-backed rules like `unique` and `exists`

## 🔧 Usage

```ts
import { validate } from 'validatorshield';

const data = {
  email: 'admin@example.com',
  password: 'secret123',
};

const rules = {
  email: ['required', 'email', 'unique:users,email'],
  password: ['required', 'min:6'],
};

const result = await validate(data, rules);

if (!result.passed) {
  console.log(result.errors);
}