/**
 * @description 정렬 - 삽입정렬
 * @param {Array<number>} arr
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
