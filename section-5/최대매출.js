/**
 *
 * @description sliding window 알고리즘
 * @param {number} k
 * @param {Array<number>} arr
 */
function solution(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER,
    sum = 0;
  // k번째 까지 값 구하기
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
