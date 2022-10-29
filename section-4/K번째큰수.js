/**
 *
 * @param {number} num
 * @param {Array<number>} card
 * @returns
 */
function solution(num, card) {
  let answer;
  const tmp = new Set();
  const n = card.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  answer = Array.from(tmp).sort((a, b) => b - a)[num - 1];
  return answer;
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
