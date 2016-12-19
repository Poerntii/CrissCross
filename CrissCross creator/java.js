var keyW;
var wordArray;
var count = 0;
var kWordLength;
//Hlot sich das Keyword und speicher es in einen String
function keyWord(value){
    keyW = value;
}
//Erstellt Input Felder entsprechend der Buchstaben des Keywords
function createInputFields(keyWordLength){
    kWordLength = keyWordLength;
    var ansDiv = document.querySelector("#ansDivContainer");
    //Löschen (Funktioniert auch mit markierten Text)
    if(count>kWordLength){
        for(var o=count; o>kWordLength; o--){
            var deletCount = o;
            var removeID=document.getElementById(deletCount);
            ansDiv.removeChild(removeID);

            var removeID_lable=document.querySelector("#lable"+deletCount);
            ansDiv.removeChild(removeID_lable);
        }    
        count = keyWordLength;
    }else{
        if(keyWordLength == 0){
            //Hir code falls gewollt für Meldung wenn User löschen taste drückt ohne das Text steht
        }else{
            count++;
            var element = document.createElement("input");
            element.className = "ansBox";
            element.id = count;
            element.setAttribute("oninput", "checkWords(this.value, this.id)");
            ansDiv.appendChild(element);
            
            var checkElement = document.createElement("img");
            checkElement.className = "ansBoxCheck";
            checkElement.id = "lable"+count;
            checkElement.src = "pictures/not.png"
            checkElement.width=20;
            checkElement.height=24;
            ansDiv.appendChild(checkElement);
        }
    }
    if(keyWordLength != null){
        checkOnChange();
    }else{
    }
}
//Keyword wird verändert: Check der einzelnen Antworten auf übereinstimmung
function checkOnChange(){
    if(kWordLength != 0){
        var wordId = document.getElementById(kWordLength).id;
        for (j = 1; j<=kWordLength; j++){
            var wordValue = document.getElementById(j).value;
            if(wordValue != null){
                wordArray = Array.from(wordValue);
                var matchArray=[];
                var activeOK = false;
                document.querySelector('#lable'+j).src = "pictures/not.png"
                for (i = 0; i < wordValue.length; i++){
                    var matches = keyW.toLowerCase().match(wordArray[i].toLowerCase());
                    matchArray[i] = matches;
                    if(matchArray[i] != null){
                        document.querySelector('#lable'+j).src = "pictures/ok.png"
                        activeOK = true;
                    }if(activeOK != true){
                        document.querySelector('#lable'+j).src = "pictures/not.png"
                    }
                }
            }
        }
    }else{}
}
//Checkt ob ein antwort Buchstabe mit einem Buchstaben des Keywords übereinstimmt
function checkWords(value, idLable){
    if(value != null){
        wordArray = Array.from(value);
        var matchArray=[];
        var activeOK = false;
        document.querySelector('#lable'+idLable).src = "pictures/not.png"
        for (i = 0; i< value.length; i++){
            var matches = keyW.toLowerCase().match(wordArray[i].toLowerCase());
            matchArray[i] = matches;
            if(matchArray[i] !== null){
                document.querySelector('#lable'+idLable).src = "pictures/ok.png"
                activeOK = true;
            }if(activeOK != true){
                document.querySelector('#lable'+idLable).src = "pictures/not.png"
            }
        }
    }else{
    }
}
//Blockiert Nummern und Satzzeichen
function checkSpecialChars(evt) { 
    evt = (evt) ? evt : window.event; 
    var charCode = (evt.which) ? evt.which : evt.keyCode; 
    if ((charCode >= 0 && charCode <=32 ) || (charCode >= 33 && charCode <=64 ) || (charCode >= 91 && charCode <= 96) || (charCode >= 123 && charCode <= 255)) { 
        return false; 
    } 
    else{return true;} 
} 