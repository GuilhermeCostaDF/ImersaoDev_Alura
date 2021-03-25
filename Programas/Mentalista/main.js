var numeroSecreto = getRandomIntInclusive(0,10)
var tentativas = 3


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while( tentativas > 0  && numeroSecreto != chute){
  
  var chute = parseInt(prompt("Digite um número de 0 a 10 \nVocê tem "+ tentativas + " tentativa(s)"))  
 
  if(chute > numeroSecreto){
    alert("O número secreto é menor")
  }

  else if(chute < numeroSecreto){
    alert("O número secreto é maior")
  }
    
  tentativas -= 1
}


if (numeroSecreto == chute){
  document.write("<h2>"+"Parabéns, você acertou!!!\nO número secreto era: " + numeroSecreto+"</h2>")
}
else{
	document.write("<h2>"+"Suas tentativas acabaram.\nO número secreto era: " + numeroSecreto+"</h2>")
}

