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
		
    document.getElementById("demo").innerHTML = "v:"+value+" c:"+code;
   	finalString = finalString + " " + newString;
	}
	//document.getElementById("demo").innerHTML = finalString;
    
}

function encryptHex(content, key){

    var finalOutput = "";
    var wordOutput;

    for(var loop = 0; loop < content.length; loop++){

      var currentWord = content[loop];
      wordOutput = "";

      for (i=0; i < s.length; i += 2) {

        code = parseInt(s.substring(i, i + 2), 16);
        wordOutput += String.fromCharCode(code ^ value);

      }

      finalOutput = finalOutput + " " + wordOutput;
  
    }

    document.getElementById("demo").innerHTML = finalOutput;

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
  var userContent = document.getElementById("ans1").value;
  var userPass = document.getElementById("userPass").value;
  var splitArray = userContent.split(" ");
  decryptHex(splitArray, userPass);
}