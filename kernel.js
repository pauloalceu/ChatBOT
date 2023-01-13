//Usado para substituir toda a string
function replaceAll(str, de, para){
	var pos = str.indexOf(de);
	while (pos > -1){
	str = str.replace(de, para);
	pos = str.indexOf(de);
	}
	return (str);
}

//Usado para substituir toda a string
function replaceAll(str, de, para){
	var pos = str.indexOf(de);
	while (pos > -1){
	str = str.replace(de, para);
	pos = str.indexOf(de);
	}
	return (str);
}


function Left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function Right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}


function coringa(resposta,original, text){

let quantidade = text.split("%");

	
	for (let q = 1; q < quantidade.length -1; q++) {
		original = replaceAll(original, quantidade[q], "&&&");
	}
	let novo = original.split("&&&");
	
	for (let q = 0; q < novo.length ; q++) {
		resposta = replaceAll(resposta, "SR" + q, novo[q]);
	}
	//alert(resposta);
return resposta;
}

String.prototype.like = function(search) {
    if (typeof search !== 'string' || this === null) {return false; }
    search = search.replace(/%/g, '.*').replace(/_/g, '.');
    return RegExp('^' + search + '$', 'gi').test(this);
}



const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {

  if ((e.code === "Enter")||(e.code === "NumpadEnter")) {
   output(inputField.value);
   inputField.value = "";  
  }
});

function output(input) {
  let resposta;
  let flag;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

   //remover
  for (let p = 0; p < remover.length; p++) {
	text = replaceAll(text,remover[p],"");
  }

  //substituir palavras
  for (let p = 0; p < sub_de.length; p++) {
	for (let q = 0; q < sub_de[p].length; q++) {
		text = replaceAll(text, " " + sub_de[p][q] + " "," "+ sub_para[p] + " ");
	} 
  }
  
  //procura respostas
  if (compare(chaves, respostas, text)) {
    resposta = compare(chaves, respostas, text);
  } 
  else {
    resposta = sem_resposta[Math.floor(Math.random() * sem_resposta.length)];
  }
  renderizar(input, resposta);
}




function compare(utterancesArray, respostasArray, string) {
  let resposta;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (string.like(utterancesArray[x][y])) {
	  //if (coringa(string, utterancesArray[x][y])) {	  
        let replies = respostasArray[x];
        resposta = replies[Math.floor(Math.random() * replies.length)];
		resposta = coringa(resposta, string, utterancesArray[x][y]);

		
	
		
       // coringa("Hello worasd asd ld, cucu aaa cucu to asdasd the universe and milu abacate.", "% worasd asd ld, % to asdasd the % and %");
      }
    }
  }
  return resposta;
}

function renderizar(input, resposta) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = "<span>" + input + "</span>";
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  
  
  setTimeout(() => {
    botText.innerText = "Escrevendo...";
  }, 500);  
  
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = resposta;
  }, 1500);
  


}
