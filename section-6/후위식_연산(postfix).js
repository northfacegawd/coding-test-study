/**
 * @description 후위식 연산
 * @param {string} operation
 */
function solution(operation) {
  const stack = [];
  for (let x of operation) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  return stack[0];
}

console.log(solution("352+*9-"));
