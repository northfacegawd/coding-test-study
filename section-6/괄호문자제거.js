/**
 * @description 자료구조 - 스택
 * @param {string} str
 */
function solution(str) {
  const stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
