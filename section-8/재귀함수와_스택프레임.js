/**
 * @description 재귀함수와 스택프레임 (중요)
 * @param {number} n
 */
function solution(n) {
  function DFS(L) {
    if (L < 1) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
