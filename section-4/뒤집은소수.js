/**
 * 뒤집은 소수
 *
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후
 * 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 * 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 *
 * 입력설명 - 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 *          각 자연수의 크기는 100,000를 넘지 않는다.
 * 출력설명 - 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
 *
 * 입력예제 - 32 55 62 20 250 370 200 30 100
 * 출력예제 - 23 2 73 2 3
 */
function isPrime(num) {
  if (num === 1) return false;
  // 제곱근까지만 돌아도 나머지 부분 확인 없이 소수 판별이 가능함
  for (let i = 2; i < Number.parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x !== 0) {
      let t = x % 10;
      res = res * 10 + t;
      x = Number.parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
