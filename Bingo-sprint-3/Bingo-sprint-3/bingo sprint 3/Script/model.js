//Model!!! this is to contain anything which directly relates to the data which is going to be used for the card.
// Arrays and data generation methods should all be encapsulated into an object.
// JavaScript source code
var cardNum = [];
var bingoNum = [];

function newNum() {
return Math.floor((Math.random() * 78) + 1);
}

//create array with random numbers - no dupes.
function genCardNum() {
  //loop needs changing into function.
for (var i = 0; i < 78;) {
//This makes a call to generate a random number with each iteration of the loop.
var n = newNum();
//loop cont
if (cardNum.indexOf(n)!== -1) {continue;
  }
    else {
      cardNum.push(n);
      i++;
    }
  }
}

function genBingoNum() {
  for (var c = 0; c < 78;) {
  //This makes a call to generate a random number with each iteration of the loop.
  var num = newNum();
  //loop cont
  if (bingoNum.indexOf(num)!== -1) {continue;
    }
      else {
        bingoNum.push(num);
        c++;
      }
    }
}
