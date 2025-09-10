export const parseChar = (text: string) => text.trimEnd();

export function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function calculateSum(a: number, b: number): number {
  return a + b;
}