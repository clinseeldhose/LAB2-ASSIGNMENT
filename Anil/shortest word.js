##shortest word
##https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript




function findShort(s){
  var arr = s.split(' ');
  var min = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }
  return min
}