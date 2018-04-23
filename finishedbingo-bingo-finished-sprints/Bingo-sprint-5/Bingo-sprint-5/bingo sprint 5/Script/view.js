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
    if (x <= 4) {
      var bNum = popBNumber();
      document.getElementById(x).innerHTML = bNum;
    } else if(x<=9) {
      var iNum = popINumber();
      document.getElementById(x).innerHTML = iNum;
    } else if (x<=13){
      var nNum = popNNumber();
      document.getElementById(x).innerHTML = nNum;
    } else if (x<= 18){
      var gNum = popGNumber();
      document.getElementById(x).innerHTML = gNum;
    } else {
      var oNum = popONumber();
      document.getElementById(x).innerHTML = oNum;
    }
    }
}

function bindOnClickEvent() {
  for (var x = 0; x < 24 ; x++){
    document.getElementById(x).onclick = updateStyles;
  }
}

function updateStyles(e) {
  alert("U clicked me");
  var winMark = 1;
  var remMark = 0;
  if (this.style.backgroundColor != "red"){
   this.style.backgroundColor = "red";
    console.log(e.target.id);
    winconarr[e.target.id] = winMark;
     }
   else {
  this.style.backgroundColor = "";
  winconarr[e.target.id] = remMark;
   }
  //passing in the target ID to locate parent from
  checkwinfunction(e.target.id);
}
