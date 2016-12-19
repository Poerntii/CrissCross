function loadDoc(str) {
    var xhttp;
    if (str.length == 0) { 
        document.getElementById("lblTest").innerHTML = "";
        return;
    } 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("lblTest").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost/crisscross.php?value="+str, true);
    xhttp.send();
}        