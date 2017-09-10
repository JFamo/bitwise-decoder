//accordion tab function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

//actually decrypt the user input
function decryptHex(pop){
    var answerIndex = 0;
		var	value;
		var	newString;
		var	code;
		var	i;
    var finalString = "";
    
    for(var loopPop=0; loopPop<pop.length;loopPop++){
   		
      var s = pop[loopPop];
      answerIndex = loopPop;

      value = (answerIndex % 31) + 1;
      newString = "";
      for (i=0; i < s.length; i += 2) {
        code = parseInt(s.substring(i, i + 2), 16);
        newString += String.fromCharCode(code ^ value);
      }
		
   	finalString = finalString + " " + newString;
	}
	document.getElementById("demo").innerHTML = finalString;
    
}

//break it down now y'all
function breakInput(){
	bigString = document.getElementById("ans1").value;

	if(bigString.indexOf("] = '") == -1){
		var splitArray = bigString.split(" ");
		decryptHex(splitArray);
	}
	else{
		var inpArray = [];
		while(bigString.indexOf("] = '") != -1){
			var subStr = bigString.substring( bigString.indexOf("] = '") + 5 , bigString.indexOf("] = '") + 7 );
			inpArray.push(subStr);
			bigString = bigString.replace( bigString.substring( bigString.indexOf("] = '"), bigString.indexOf("] = '")+8 ) ,"");
		}
		decryptHex(inpArray);
	}
}

function encodeInput(){
  userContent = document.getElementById("ans1").value;
  userPass = document.getElementById("ans2").value;
}

function toDecrypt(){
  var title = document.getElementById("title");
  title.innerHTML = "Bitwise XOR Decryptor";
  var aboutDiv = document.getElementById("aboutDiv");
  aboutDiv.innerHTML = `<p>This program is the intellectual property of J.Famous 2017.<br>
     It will decode a string encoded using the Bitwise XOR operator.<br>
     Some variables in this program are assumed, but can be replaced as necessary.</p>`;
}

function toEncrypt(){
  var title = document.getElementById("title");
  title.innerHTML = "Bitwise XOR Encryptor";
  var aboutDiv = document.getElementById("aboutDiv");
  aboutDiv.innerHTML = `<p>This program is the intellectual property of J.Famous 2017.<br>
     It will encode some content using the Bitwise XOR operator and a user-generated passkey.<br>
     Some variables in this program are assumed, but can be replaced as necessary.</p>`;
}