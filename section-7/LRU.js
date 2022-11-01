/**
 * @description Least Recently Used(카카오 캐시 문제 변형)
 * @param {number} size
 * @param {Array<number>} arr
 */
function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  //   삽입정렬로
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) {
        pos = i;
      }
    }
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  // 내장함수 사용
  //   let answer = [];
  //   arr.forEach((x) => {
  //     let pos = -1;
  //     for (let i = 0; i < size; i++) {
  //       if (x === answer[i]) {
  //         pos = i;
  //       }
  //     }
  //     if (pos === -1) {
  //       answer.unshift(x);
  //       if (answer.length > size) answer.pop();
  //     } else {
  //       answer.splice(pos, 1);
  //       answer.unshift(x);
  //     }
  //   });

  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
