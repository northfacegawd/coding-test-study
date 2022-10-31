/**
 * @description 자료구조 - 스택
 * @param {string} str
 */
function solution(str) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") stack.push(str[i]);
    else {
      stack.pop();
      // 레이저
      if (str[i - 1] === "(") answer += stack.length;
      // 막대기 끝
      else answer += 1;
    }
  }
  return answer;
}

console.log(solution("()(((()())(())()))(())"));
