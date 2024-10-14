export default function cutText(text: string, charNumber: number) {
  if (text.length <= charNumber || !charNumber) return text;
  return `${text.substring(0, charNumber)}...`;
}
