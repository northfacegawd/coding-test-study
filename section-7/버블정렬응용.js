/**
 * @description 정렬 - Special Sort(구글 인터뷰) 버블정렬 응용
 * @param {Array<number>} arr
 */
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
