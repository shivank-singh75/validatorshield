import { required } from './rules/required';
import { email } from './rules/email';
import { min } from './rules/min';
import { max } from './rules/max';
import { exists } from './rules/exists';
import { unique } from './rules/unique';

const ruleFns: Record<string, Function> = {
  required,
  email,
  min,
  max,
  exists,
  unique,
};

export async function validate(
  data: Record<string, any>,
  rules: Record<string, string[]>
): Promise<{ passed: boolean; errors: Record<string, string[]> }> {
  const errors: Record<string, string[]> = {};
  let passed = true;

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = data[field];

    for (const rule of fieldRules) {
      const [ruleName, ...args] = rule.split(/:|,/g);
      const ruleFn = ruleFns[ruleName];

      if (ruleFn) {
        const valid = await ruleFn(value, ...args);
        if (!valid) {
          passed = false;
          errors[field] = errors[field] || [];
          errors[field].push(`${field} failed validation: ${rule}`);
        }
      }
    }
  }

  return { passed, errors };
}