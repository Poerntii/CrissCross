<?php
    $value = $_GET['value'];
    $id = $_GET['id'];
    echo"<script language='javascript'>
        var value = "$value";
        var idLable = "$id";
        if(value != null){
            wordArray = Array.from(value);
            var matchArray=[];
            var activeOK = false;
            document.querySelector('#lable'+idLable).src = 'pictures/not.png';
            for (i = 0; i< value.length; i++){
                var matches = keyW.toLowerCase().match(wordArray[i].toLowerCase());
                matchArray[i] = matches;
                if(matchArray[i] !== null){
                    document.querySelector('#lable'+idLable).src = 'pictures/ok.png'
                    activeOK = true;
                }if(activeOK != true){
                    document.querySelector('#lable'+idLable).src = 'pictures/not.png'
                }
            }
        }
        else{}
    </script>";
?>
