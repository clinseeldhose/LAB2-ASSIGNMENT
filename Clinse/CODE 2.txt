##Basic Math (Add or Subtract)
##https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

function calculate(str) {
  let runningCount = "";
  
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    
    if (el === "p") {
      runningCount += "+";
      i += 3;
      continue;
    }
    
    if (el === "m") {
      runningCount += "-";
      i += 4;
      continue;
    }
    
    runningCount += el;
  }
  
  return eval(runningCount).toString();
}