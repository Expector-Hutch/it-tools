import { tex2unicode } from "tex2unicode";

export function latexToUnicode({ text }: { text: string }): string {
  return tex2unicode(text);
}
