/**
 * 가장 짧은 문자거리
 *
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의
 * 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 *
 * 입력설명 - 첫 번째 줄에 문자열 s와 문자 t가 주어진다.
 *          문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
 * 출력설명 - 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 *
 * 입력예제 - teachermode e
 * 출력예제 - 10121012210
 */

/**
 *
 * @param {string} str1
 * @param {string} str2
 */
function solution(str1, str2) {
  let answer = [];
  let p = 1000;
  for (let s of str1) {
    if (s === str2) {
      p = 0;
    } else {
      p++;
    }
    answer.push(p);
  }
  p === 1000;
  for (let i = str1.length - 1; i >= 0; i--) {
    if (str1[i] === str2) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

console.log(solution("teachermode", "e"));
