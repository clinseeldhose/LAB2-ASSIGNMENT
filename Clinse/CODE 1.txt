##Is n divisible by x and y?
##https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

function isDivisible(n, x, y) {
 if (!(n % x) && !(n % y)) {
 return true;
 } else {
 return false;
 }
}


