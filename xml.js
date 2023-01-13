

function carrega(arquivoXML){
	

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",arquivoXML, false);
    xhttp.send();
    myFunction(xhttp);//(this);
	
	
	
	    var xmlDoc = xml.responseXML;

	
alert(xmlDoc.getElementsByTagName("uppercase")[0].childNodes[0].nodeValue);
		
		
		
}	