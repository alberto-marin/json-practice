/*
  JSON Crash Course by Traversy Media
  https://www.youtube.com/watch?v=wI1CWzNtE-M
  http://jsonlint.com/
  https://www.w3schools.com/xml/xml_http.asp
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
      //  console.log(response.people);
      response.people.forEach(person => document.getElementById('people-names').innerHTML += '<li>' + person.name + '</li>')
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
