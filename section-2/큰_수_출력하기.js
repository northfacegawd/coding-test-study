/**
 * 큰 수 출력하기
 *
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만
 * 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)
 *
 * 입력설명 - N개의 정수가 입력된다.
 * 출력설명 - 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 *
 * 입력예제 - 7 3 9 5 6 12
 * 출력예제 - 7 9 6 12
 */

function solution(...args) {
  let answer = [];
  answer.push(args[0]);
  for (let i = 0; i < args.length; i++) {
    if (args[i] > args[i - 1]) answer.push(args[i]);
  }
  return answer;
}

console.log(solution(7, 3, 9, 5, 6, 12));
