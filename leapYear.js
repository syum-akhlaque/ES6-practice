function leapYear(year){
  if(  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
      var x='leap year';
      return x;
  }
  else
    var y="no leap year";
    return y;
}

console.log(leapYear(2100));
console.log(leapYear(2101));
console.log(leapYear(2102));
console.log(leapYear(2103));
console.log(leapYear(2104));
console.log(leapYear(2105));
