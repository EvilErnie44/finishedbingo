// JavaScript source code

var container = document.getElementById('usednum');
var containerFinMessage = document.getElementById("finmessage");

function updateDiv() {
  //Append
  container.appendChild(document.createTextNode(cardNum.join(", ")));
  finmessage.appendChild(document.createTextNode("All Numbers Called"));
}
