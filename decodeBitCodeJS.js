function DecryptHex(pop)
	{
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

function BreakInput(bigString){
	if(bigString.equals("")){
		bigString = document.getElementById("ans1").value;
	}
	var inpArray = [];
	while(bigString.indexOf("] = '") != -1){
		var subStr = bigString.substring( bigString.indexOf("] = '") + 5 , bigString.indexOf("] = '") + 7 );
		inpArray.push(subStr);
		bigString = bigString.replace( bigString.substring( bigString.indexOf("] = '"), bigString.indexOf("] = '")+8 ) ,"");
	}
	DecryptHex(inpArray);
}

document.forms['myform'].elements['myfile'].onchange = function(evt) {
	window.alert("changed!");
    if(!window.FileReader) return; // Browser is not compatible

    var reader = new FileReader();

    reader.onload = function(evt) {
        if(evt.target.readyState != 2) return;
        if(evt.target.error) {
            alert('Error while reading file');
            return;
        }

        filecontent = evt.target.result;

        document.forms['myform'].elements['text'].value = evt.target.result;
    };

    reader.readAsText(evt.target.files[0]);
};
