//Validando XML
var xt="",h3OK=1
function checkErrorXML(x)
{
	xt=""
	h3OK=1
	checkXML(x)
}
//Validando XML
function checkXML(n)
{
	var l,i,nam
	nam=n.nodeName
	if (nam=="h3")
		{
		if (h3OK==0)
			{
			return;
			}
		h3OK=0
		}
	if (nam=="#text")
		{
		xt=xt + n.nodeValue + "\n"
		}
	l=n.childNodes.length
	for (i=0;i<l;i++)
		{
		checkXML(n.childNodes[i])
		}
}

//Validando XML
function validateXML(xmlDoc)
{
	// código para IE
	if (window.ActiveXObject)
	  {
	  xmlDoc.async=false;
	  xmlDoc.loadXML(document.all("validxml").value);

	  if(xmlDoc.parseError.errorCode!=0)
		{
		txt="Error Code: " + xmlDoc.parseError.errorCode + "\n";
		txt=txt+"Error Reason: " + xmlDoc.parseError.reason;
		txt=txt+"Error Line: " + xmlDoc.parseError.line;
		alert(txt); //Exibe erro do XML
		}
	  }
	// código para Mozilla, Firefox, Opera, etc.
	else if (document.implementation && document.implementation.createDocument)
	  {
	if (xmlDoc.getElementsByTagName("parsererror").length>0)
		{
		checkErrorXML(xmlDoc.getElementsByTagName("parsererror")[0]);
		alert('Erro do XML: ' + xt) //Exibe erro do XML
		}
	  }
	else
	  {
		alert('Seu navegador não suporta esse script');
	  }
}


	//abre xml
    if (window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "SAIML.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

	//Verificando erros no XML, se tiver dá um alert
	validateXML(xmlDoc);

	//remover 
	var remover = [];
    let z = xmlDoc.getElementsByTagName("D");
	
    for (let i = 0; i < z.length; i++){
		remover.push(z[i].childNodes[0].nodeValue);
    }
	
	
  /*  document.write("<table border='1'>");
    let x = xmlDoc.getElementsByTagName("CD");
    for (let i = 0; i < x.length; i++){
        document.write("<tr><td>");
        document.write("Artista: " + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
        document.write("</br>")
        document.write("Disco: " + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
        document.write("</td></tr>");
    }
    document.write("</table>");*/


//Substuir de
const sub_de = [
["haha","ha","hahaha","hehe","funny","joke","kkk","kkkk","kkkkk","kkkkkk"],
["vose","vc","oce","tu","vos mi ce","vosmice","ce"]
];

//Substuir para
const sub_para = [
["lol"],
["você"]
];


//Palavras Chaves
const chaves = [
["%pqp%", "%cuzinho%", "%buceta%","%caralho%","%cacete%","%puta%","%piroca%","%cuzao%","%pau duro%","%anal%","%tranzar%"],
["%bad%","%michael%"],
["oi","ola"],
["lindo","bonito","fofinho","bonitinho","fofura","cutecute","belo"],
["flamengo","fluminense","gremio","vasco","cruzeiro","coríntias","mengao","flusao"],
["%bolsonaro%","%lula%","%bomsominions%","%voto%","%bush%","%trump%","%eleitoral%","%urna eletronica%","%eleicao%","%jair bolsonaro%","%partido Pt%"],
[""]];


//Possiveis respostas
const respostas = [
["Boca suja","Que feio! Não gosto de pessoas que falam palavrão","Nossa! Você é muito mal educado","Não vou responder perguntas com palavões","Tua mãe não te ensinou bons modos?"],
["Jackson SR1 e SR0 ","Adoro Jackson SR1 e SR0 "],
["Oi! Tudo joia?"],
["Obrigado!"],
["Política, religião e futebol eu não discuto"],
["Prefiro não falar sobre politica.","Não me envolvo com política","Política, religião e futebol eu não discuto"],
["Por favor diga algo","Ficou até sem palavras...","Qual é a pergunta?","Você não falou nada....","Por favor digite algo","Digite sua Pergunta por favor"]];


//Caso não encontre uma resposta
const sem_resposta = [
"Não entendi, pode repetir?",
"Resposta não encontrada em mau banco de dados, sinto muito",
"Resposta não encontrada",
"Essa resposta vou te ficar devendo",
"Pode repetir por favor?",
"Pode repetir?",
"Não tenho essa resposta",
"Não encontrei nada no meu banco de dados",
"Tente Novamente"];
