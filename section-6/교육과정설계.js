/**
 * @description 자료구조 - 큐
 * @param {string} need
 * @param {string} plan
 */
function solution(need, plan) {
  const queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return "YES";
}

console.log(solution("CBA", "CDBGAE"));
