export function min(value: any, min: string): boolean {
    return typeof value === 'string' && value.length >= parseInt(min);
}