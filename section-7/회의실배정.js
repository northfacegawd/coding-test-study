/**
 * @description 그리디
 * @param {Array<[number, number]>} meeting
 */
// HINT! 끝나는 시간 순으로 정렬해야함
function solution(meeting) {
  let answer = 0;
  const sortedMetting = meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;
  for (let x of sortedMetting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
