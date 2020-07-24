var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description").innerHTML = ` ${myObj.description}...`;
    document.getElementById("date").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe/",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description1").innerHTML = myObj.description;
        document.getElementById("date1").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score1").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director1").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer1").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d/",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description2").innerHTML = myObj.description;
        document.getElementById("date2").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score2").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director2").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer2").innerHTML = `Producer: ${myObj.producer}`;
  }
};

xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description3").innerHTML = myObj.description;
        document.getElementById("date3").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score3").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director3").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer3").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description4").innerHTML = myObj.description;
        document.getElementById("date4").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score4").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director4").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer4").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/45204234-adfd-45cb-a505-a8e7a676b114",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description5").innerHTML = myObj.description;
        document.getElementById("date5").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score5").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director5").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer5").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description7").innerHTML = myObj.description;
        document.getElementById("date7").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score7").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director7").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer7").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description8").innerHTML = myObj.description;
        document.getElementById("date8").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score8").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director8").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer8").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description9").innerHTML = myObj.description;
        document.getElementById("date9").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score9").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director9").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer9").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description10").innerHTML = myObj.description;
        document.getElementById("date10").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score10").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director10").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer10").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description11").innerHTML = myObj.description;
        document.getElementById("date11").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score11").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director11").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer11").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description12").innerHTML = myObj.description;
        document.getElementById("date12").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score12").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director12").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer12").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description17").innerHTML = myObj.description;
        document.getElementById("date17").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score17").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director17").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer17").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description18").innerHTML = myObj.description;
        document.getElementById("date18").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score18").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director18").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer18").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
  true
);
xmlhttp.send();

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("description19").innerHTML = myObj.description;
        document.getElementById("date19").innerHTML = `Release date: ${myObj.release_date}`;
    document.getElementById("rt-score19").innerHTML = `Rt score: ${myObj.rt_score} %`;
    document.getElementById("director19").innerHTML = `Director: ${myObj.director}`;
    document.getElementById("producer19").innerHTML = `Producer: ${myObj.producer}`;
  }
};
xmlhttp.open(
  "GET",
  "https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc-4666af60c800",
  true
);
xmlhttp.send();