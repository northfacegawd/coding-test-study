/**
 * @description 자료구조 - 큐
 * @param {number} n
 * @param {number} m
 */
function solution(n, m) {
  let answer;
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length > 0) {
    for (let i = 1; i < m; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

console.log(solution(8, 3));
