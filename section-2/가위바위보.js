/**
 * 가위 바위 보
 *
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
 * B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면
 * 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
 *
 * 입력설명 - 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
 *          두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 *          세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 * 출력설명 - 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
 *
 * 입력예제 - 5, 23313, 11223
 * 출력예제 - A, B, A, B, D
 */

function solution(n, a, b) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    switch (a[i]) {
      case 1:
        if (b[i] === 1) answer.push("D");
        if (b[i] === 2) answer.push("B");
        if (b[i] === 3) answer.push("A");
        break;
      case 2:
        if (b[i] === 1) answer.push("A");
        if (b[i] === 2) answer.push("D");
        if (b[i] === 3) answer.push("B");
        break;
      case 3:
        if (b[i] === 1) answer.push("B");
        if (b[i] === 2) answer.push("A");
        if (b[i] === 3) answer.push("D");
        break;
    }
  }
  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
