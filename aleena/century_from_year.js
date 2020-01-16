function century(year) {
  if (year <= 100){
    return 1;
  }

  let ctry = parseInt(year / 100);
  let rmndr = year % 100;
  if (rmndr == 0)
  {
  return ctry;
  }
  else 
  return ctry + 1 ;
 
}