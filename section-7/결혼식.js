/**
 * @description 그리디
 * @param {Array<number>} arr
 */
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let x of arr) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of timeLine) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
