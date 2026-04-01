import { replace } from 'unicodeit';

export function latexToUnicode({ text }: { text: string }): string {
  return replace(text);
}
