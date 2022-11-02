function count(stable, dist) {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

/**
 * @description 이분 검색 결정 알고리즘
 * @param {number} c
 * @param {Array<number>} stable
 */
function solution(c, stable) {
  let answer;
  const sortedStable = stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

console.log(solution(3, [1, 2, 4, 8, 9]));
