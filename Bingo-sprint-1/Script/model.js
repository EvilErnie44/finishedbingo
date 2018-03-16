//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code
var cellNumObj = [];
var cardNum = [];
function newNum() {
return Math.floor((Math.random() * 76) + 1);
}

//Controller - controls the use of the events.
window.onload = function cellRanNum() {
cellNum();
genRandNum();
bingoCard1();
//bingoCard2();
}

//create awway with square strings
function cellNum() {
 for (i=0; i<24; i++){
  cellNumObj.push("square"+(i));
 }
}

//create array with random numbers - no dupes.
function genRandNum() {
  //loop needs changing into function. 
for (i=0; i<24;) {
//This makes a call to generate a random number with each iteration of the loop.
  newNum();
//loop cont
if (cardNum.indexOf(newNum)!== -1) {continue;
  }
    else {
      cardNum.push(newNum);
      i++;
    }
  }
}

//Put any ran num into the bingo squares
function bingoCard1() {
for (var i=0; i<24; i++) {
document.getElementById("square"+i).innerHTML = newNum();
}
}

//creates array of random numbers with duplicates
function genRandNum() {
for (i=0; i<24; i++) {
cardNum.push(Math.floor((Math.random() * 76) + 1));
}

}
/*
New Change
window.onload=bingoCard;

Function bingoCard2() {
for (var i=0; i<24; i++) {
var ranNum = math.floor(math.random()*75) +1;
document.getElementById("square" +i).innerHTML = ranNum;
}
}

//Creates the biggest random numbers.
(Math.floor((Math.random() * Number.MAX_SAFE_INTEGER) + 1));

function genRandNum() {
for (i=0; i<24; i++) {
let newNum = (Math.floor((Math.random() * 76) + 1));
if (cardNum.indexOf(newNum)) {continue;
  }
    else {
      cardNum.push(newNum);
    }
  }
}

*/
//cardNum.push(Math.floor((Math.random() * 76) + 1));}
