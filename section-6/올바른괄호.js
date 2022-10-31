/**
 * @description 자료구조 - 스택
 * @param {string} str
 */
function solution(str) {
  const stack = [];
  for (let x of str) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) {
        return "NO";
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return "YES";
}

console.log(solution("(()(()))()"));
