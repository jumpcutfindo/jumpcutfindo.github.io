export function lynnTextify(isLynnState: boolean, text: string) {
  if (!isLynnState) {
    return text;
  }

  const lynnText = text
    .replaceAll(" ", "|")
    .split("")
    .join(" ")
    .replaceAll("|", "\u00A0")
    .replaceAll(/<\s*i\s*>/g, "<i>")
    .replaceAll(/<\s*\/\s*i\s*>/g, "</i>")
    .replaceAll(/<\s*b\s*>/g, "<b>")
    .replaceAll(/<\s*\/\s*b\s*>/g, "</b>")
    .replaceAll(/<\s*u\s*>/g, "<u>")
    .replaceAll(/<\s*\/\s*u\s*>/g, "</u>");

  return lynnText;
}
