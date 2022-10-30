function solution(str1, str2) {
  const map = new Map();
  if (str1.length !== str2.length) return "NO";
  for (let s of str1) {
    if (map.has(s)) map.set(s, map.get(s) + 1);
    else map.set(s, 1);
  }
  for (let s of str2) {
    if (!map.has(s) || map.get(s) === 0) return "NO";
    map.set(s, map.get(s) - 1);
  }
  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA"));
