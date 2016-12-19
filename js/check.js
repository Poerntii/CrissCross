function loadDoc(str, ident) {
    var xhttp;
    if (str.length == 0) { 
        document.getElementById("lblTest").innerHTML = "";
        return;
    } 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }else{
            alert('Internal Server Error');
        }
    };
    xhttp.open("GET", "http://localhost/crisscross.php?value="+str+"&id="+ident, true);
    xhttp.send();
}        