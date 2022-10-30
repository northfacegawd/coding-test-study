/**
 * @description HashMap 알고리즘
 * @param {Array<string>} arr
 */
function solution(arr) {
  const map = new Map();
  let answer;
  for (let x of arr) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of map) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(
  solution([
    "B",
    "A",
    "C",
    "B",
    "A",
    "C",
    "C",
    "A",
    "C",
    "C",
    "B",
    "D",
    "E",
    "D",
    "E",
  ])
);
