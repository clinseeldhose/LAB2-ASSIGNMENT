 
##rule divisible by 7
##https://www.codewars.com/kata/55e6f5e58f7817808e00002e




const seven = m => {
  let times = 0;
  let result = 0;
  let number = String(m);
  while(number.length > 2){
    times++;
    let firstNumber = Number(number.slice(-1))
    const remaining = Number(number.slice(0, number.length - 1))
    result = remaining - 2 * firstNumber
    number = String(result)
  }
  return [result, times]
}

console.log(seven(1603));