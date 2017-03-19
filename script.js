var buttonclicked = document.getElementById("button");

buttonclicked.onclick = retrieveCity();

function retrieveCity(e){
   var city = document.getElementById("citytext");
   alert(city); 
};