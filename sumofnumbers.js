function sumFor(list) {
  let sum = 0;
  for (const number of list) {
    sum += number;
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

const numbers = [1, 2, 3, 4];
console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay(numbers));
