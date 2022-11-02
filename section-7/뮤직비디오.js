/**
 * @param {Array<number>} songs
 * @param {number} capacity
 */
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

/**
 * @description 결정 알고리즘
 * @param {number} m
 * @param {Array<number>} songs
 */
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
