//problem 1: feet to mile convertion
var feet;
function feetToMile(feet) {
    if (feet<0){
        return "Distance can not be negative";
    }
    else{
        var cal=(feet / 5280).toFixed(4);
        return feet+ " feet = " + cal + " miles"; 
    }
  }
  var mile= feetToMile(10000);
  console.log(mile);

// problem 2:wood Calculator;
console.log("");//for a breck between next answer

var chair,table,bed;
function woodCalculator(chair,table,bed){
  totalWood = chair*1 + table*3 + bed*5;
  return "Your demand is: " +chair+ " chair, " + table+ " table and " + bed+" bed."+" Required wood: "+totalWood+" CFT.";
}
console.log( woodCalculator(6,2,3) );

//problem 3: brick Calculator
console.log("");//for a breck between next answer

var floor,brick;

function brickCalculator(floor){
  if(floor<=10){
  brick=floor*1000*15;
  }
  else if (floor <=20){
    var firstUnit=10;
    var secondUnit= floor-firstUnit;
    brick= firstUnit*15*1000+secondUnit*12*1000;
    }
  else{
    var firstUnit=10;
    var secondUnit= 10;
    var thirdUnit= floor-firstUnit-secondUnit;
    brick= firstUnit*15*1000 + secondUnit*12*1000 + thirdUnit*10*1000;
  }
  return "Number of floor: "+ floor+". Required bricks: "+brick;
}
console.log(brickCalculator(15));

//tiny friend 
console.log("");//for a breck between next answer

var friends = ["Jhankar", "arman", "kamrul hasan", "syum","ashfaque","rafi"];
var friends1 = ["Jhankar", "arman", "joy", "syum","ashfaque","toy"];

function tinyFriend(arr){
    var smallestName=arr[0];
    var listSmallestName= [];
    for(var i=0; i< arr.length; i++){
            var curName= arr[i];
            if(curName.length<smallestName.length){
                smallestName=curName; 
            }   
        }
    var minLength = smallestName.length;
    for(var i=0; i< arr.length; i++){
        var curName= arr[i];
        if(curName.length == minLength){
            listSmallestName.push(curName); 
        }   
    }
    return "Smallest name: " + listSmallestName;
}
console.log(tinyFriend(friends));
console.log(tinyFriend(friends1));
console.log(tinyFriend(["Jhankar", "arman", "joy", "syum","ashfaque","toty"]));