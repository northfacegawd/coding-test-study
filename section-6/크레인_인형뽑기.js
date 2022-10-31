/**
 * @description 자료구조 - 스택 (카카오 기출문제)
 * @param {Array<Array<number>>} board
 * @param {Array<number>} moves
 */
function solution(board, moves) {
  let answer = 0;
  const stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        // for문이 계속 돌면 해당 열에 인형을 다 꺼내버림
        break;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
