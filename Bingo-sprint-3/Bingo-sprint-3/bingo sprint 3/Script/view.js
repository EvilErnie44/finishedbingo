// JavaScript source code

var container = document.getElementById('usednum');
var containerFinMessage = document.getElementById("finmessage");

function updateDiv() {
  //Append
  container.appendChild(document.createTextNode(bingoNum.join(", ")));
  //Show steve weird behaviour.
  containerFinMessage.appendChild(document.createTextNode("All Numbers Called"));
}

function populateCard() {
  for (var x=0; x<24; x++) {
    let b = cardNum.pop();
  document.getElementById("square"+x).innerHTML = b;
    }
  }
