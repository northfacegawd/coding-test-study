/**
 * 최솟값 구하기
 *
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 *
 * 입력설명 - 첫 번째 줄에 7개의 수가 주어진다.
 * 출력설명 - 첫 번째 줄에 가장 작은 값을 출력한다.
 *
 * 입력예제 1 - 5 3 7 11 2 15 17
 * 출력얘제 1 - 2
 */

function solution(...numbers) {
  // 첫번째 답
  return Math.min(...numbers);
  // 두 번째 답
  //   return numbers.reduce((prev, cur) => (prev > cur ? cur : prev));
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));
