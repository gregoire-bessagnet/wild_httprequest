var city = "";

$(document).ready(function(){
	     $('button').click(function(){
		 var city = document.getElementById('citytext').value;
         console.log("stocke");
        request();
        console.log("lanace la fonction");
})});

function request() {

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("ca passe");
	    var data = JSON.parse(xhr.responseText);
    } else {
        console.log('Une erreur s’est produite.');
    }
    };

xhr.open("GET", "http://api.openweathermap.org/data/2.5/find?q=" + city + "&units=metric&APPID=xxxxxxxxxxxx", true);
xhr.send(null);
// }};
	    };
};


// var push = document.getElementById("button");
// var buttonclicked = push.addEventListener("click", // retrieveText(), false);


// requete HTTP



// function qui affiche le reultat

// function readData(sData) {
	// var nodes = oData.getElementsByTagName("soft");
	//var ol = document.createElement("ol"), li, cn;

	//for (var i=0, c=nodes.length; i<c; i++) {
	//	li = document.createElement("li");
	//	cn = document.createTextNode(nodes[i].getAttribute("name"));

	//	li.appendChild(cn);
	//	ol.appendChild(li);
	// }

	// document.getElementById("output").appendChild(ol);
//};

// http://www.webdesignerdepot.com/2013/04/how-to-use-local-storage-for-javascript/

