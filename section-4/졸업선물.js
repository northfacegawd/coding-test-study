/**
 *
 * @param {number} money
 * @param {Array<Array<number>>} product
 */
function solution(money, product) {
  let answer = 0;
  const n = product.length;
  const sortedProduct = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    // 할인된 가격으로 구매
    let m = money - (sortedProduct[i][0] / 2 + sortedProduct[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      let price = sortedProduct[j][0] + sortedProduct[j][1];
      // 남은 예산보다 작아야 살 수 있음.
      if (j !== i && price > m) break;
      // 할인된 가격으로 이미 삼.
      if (j !== i && price <= m) {
        m -= price;
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
