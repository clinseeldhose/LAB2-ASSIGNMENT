function sumOfDifferences(arr) {
if(arr.length >1 )
{
var sum = Math.max(...arr) - Math.min(...arr)   

return sum
}
else
 return 0
 }