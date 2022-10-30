/**
 *
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

/**
 * @description Hash & Sliding Window & Two Pointers 알고리즘
 * @param {string} str1
 * @param {string} str2
 */
function solution(str1, str2) {
  let answer = 0;
  const tH = new Map();
  const sH = new Map();
  let len = str2.length - 1;
  for (let s of str2) {
    if (tH.has(s)) tH.set(s, tH.get(s) + 1);
    else tH.set(s, 1);
  }
  for (let i = 0; i < len; i++) {
    if (sH.has(str1[i])) sH.set(str1[i], sH.get(str1[i]) + 1);
    else sH.set(str1[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < str1.length; rt++) {
    // 빼고 추가 비교
    if (sH.has(str1[rt])) sH.set(str1[rt], sH.get(str1[rt]) + 1);
    else sH.set(str1[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(str1[lt], sH.get(str1[lt]) - 1);
    if (sH.get(str1[lt]) === 0) sH.delete(str1[lt]);
    lt++;
  }

  return answer;
}

console.log(solution("bacaAacba", "abc"));
