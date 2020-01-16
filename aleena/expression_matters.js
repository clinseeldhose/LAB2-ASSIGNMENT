//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

function expressionMatter(a, b, c) {
  let result = [];
  result.push(a + b + c);
  result.push(a * b * c);
  result.push(a + b * c);
  result.push(a * b + c);
  result.push((a + b) * c);
  result.push(a * (b + c));
  return Math.max(...result);
}