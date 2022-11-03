/**
 * @descripti
 * on 이진트리 순회 (DFS: 깊이 우선 탐색)
 * @param {number} n
 */
function solution(n) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    else {
      // 전위순회
      DFS(v * 2);
      DFS(v * 2 + 1);
      // 중위순회
      //   DFS(v * 2);
      //   console.log(v);
      //   DFS(v * 2 + 1);
      // 후위순회
      //   DFS(v * 2);
      //   DFS(v * 2 + 1);
      //   console.log(v);
    }
  }
  DFS(n);
  return answer;
}
console.log(solution(1));
