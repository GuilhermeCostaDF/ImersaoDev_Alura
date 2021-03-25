

var operacao = parseInt(prompt(" 1 - Divisão \n 2 - Multiplicação \n 3 - Soma \n 4 - Subtração \n 9 - Mais opções"))
    
    switch(operacao) {
        
        case 1 :
            var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
            var segundoValor = parseInt(prompt('Digite o segundo valor: '));
            var resultado = primeiroValor / segundoValor
            document.write("<h2>" + primeiroValor + " / " + segundoValor + " = "+ resultado + "</h2>");
        break;
    
        case 2 :
            var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
            var segundoValor = parseInt(prompt('Digite o segundo valor: '));
            var resultado = primeiroValor * segundoValor
            document.write("<h2>" + primeiroValor + " x " + segundoValor + " = "+ resultado + "</h2>");
        break;
        
        case 3 :
            var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
            var segundoValor = parseInt(prompt('Digite o segundo valor: '));
            var resultado = primeiroValor + segundoValor
            document.write("<h2>" + primeiroValor + " + " + segundoValor + " = "+ resultado + "</h2>");
        break;
        
        case 4 :
            var primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
            var segundoValor = parseInt(prompt('Digite o segundo valor: '));
            var resultado = primeiroValor - segundoValor
            document.write("<h2>" + primeiroValor + " - " + segundoValor + " = "+ resultado + "</h2>");
        break;
        
        case 9 :
            var maisOpt = parseInt(prompt(" 1 - Raiz Quadrada \n 2 - Raiz Cúbica \n 3 - Potência \n 4 - Logaritmo Natural(base e) \n 9 - Cancelar"))    
            
            if(maisOpt == 1){
                var num = prompt("Digite o valor desejado(maior que zero): ")
                resultado = Math.sqrt(num)
                document.write("<h2> Raiz²: "+ resultado +"</h2")
            }
        
            else if(maisOpt == 2){
                var num = prompt("Digite o valor desejado(maior que zero): ")
                resultado = (Math.cbrt(num)).toFixed(2)
                document.write("<h2> Raiz³: "+ resultado +"</h2")
            }
        
            else if(maisOpt == 3){
                var base = parseInt(prompt("Digite a base: "));
                var expoente = parseInt(prompt('Digite o expoente: '));
                var resultado = (Math.pow(base, expoente)).toFixed(2)
                document.write("<h2>" + base + " ** " + expoente + " = "+ resultado + "</h2>");
            
            }
        
            else if(maisOpt == 4){
                var num = prompt("Digite o valor desejado(maior ou igual a zero): ")
                var resultado = (Math.log(num)).toFixed(2)
                document.write("<h2> "+ resultado + "</h2>");
            }
            
            else if(maisOpt == 9){
                document.write("<h2>Operação Cancelada</h2>");
            }
        
            else{
               document.write("<h2> Opção inválida </h2>");
            }
        break;
        
        default:
            document.write("<h2> Opção inválida </h2>"); 
        
    }
