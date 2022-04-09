const wordsMap = new Map<string[], number>();
wordsMap.set(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1);
wordsMap.set(['D', 'G'], 2)
wordsMap.set(['B', 'C', 'M', 'P'], 3)
wordsMap.set(['F', 'H', 'V', 'W', 'Y'], 4)
wordsMap.set(['K'], 5)
wordsMap.set(['J', 'X'], 8)
wordsMap.set(['Q', 'Z'], 10)

export function score(word: string | undefined): number {
  let count = 0;
  if (!word) return 0;
  const upperCasedWord = word.toUpperCase();
  upperCasedWord.split('').forEach(letter => {
    wordsMap.forEach((value, key, map) => {
      if (key.includes(letter)) count += value;
    })
  })
  return count;
}
