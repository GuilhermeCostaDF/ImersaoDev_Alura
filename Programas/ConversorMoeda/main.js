var ValorEmDolar = parseFloat(prompt("Qual valor em dolar você quer converter? (USD)"))
var ValorEmReal = (ValorEmDolar * 5.50).toFixed(2)
alert("R$ " + ValorEmReal)
