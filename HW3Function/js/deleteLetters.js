export function deleteLetters(ltr, word) {
  ltr = ltr.toLowerCase();
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    word = word.replace(ltr, "");
  }
  return (
    "Word without delete letters: " +
    word[0].toUpperCase() +
    word.slice(1).toLowerCase()
  );
}
