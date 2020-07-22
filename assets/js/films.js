var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description").innerHTML = myObj.description;
  }
};
xmlhttp.open("GET", "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe/", true);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description1").innerHTML = myObj.description;
  }
};
xmlhttp.open("GET", "https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d/", true);
xmlhttp.send();