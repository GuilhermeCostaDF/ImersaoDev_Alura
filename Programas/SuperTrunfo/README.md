# TRUNFO E LÓGICA DO JOGO :space_invader::flower_playing_cards:





Nesta sétima aula da **Imersão Dev**, vamos criar um jogo de cartas chamado Trunfo! O código da aula para você acompanhar está aqui:

https://codepen.io/imersao-dev/pen/WNRNNOb

Neste programa, focamos no desenvolvimento da lógica do jogo do zero, desde a criação das cartas, sorteio das cartas, interações com usuário, e definindo um vencedor.

## Conteúdo detalhado dessa aula

- Criar as cartas do jogo e definir seus atributos;
- Desenvolver uma função para sortear uma carta para o jogador e outra para a máquina;
- Exibindo os atributos das cartas na tela para o jogador;
- Obter o atribudo escolhido pelo jogador e comparar com a carta da máquina;
- Comparar o atributo de ambas as cartas e definir um vencedor.

## Desafios dessa aula!

- Exibir a carta do jogador e da máquina na tela;
- Adicionar uma imagem em cada carta.

## Links importantes para você acompanhar a aula

- [Codepen - editor de código online](https://codepen.io/)
- [HTML, CSS e JavaScript, quais as diferenças](https://www.alura.com.br/artigos/html-css-e-js-definicoes)
- [Repositório do código final da aula 6](https://codepen.io/imersao-dev/pen/qBRBBrx)

## Links citados nessa aula

- [Mais sobre variáveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#variáveis)
- [Mais sobre a função parseFloat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

## Conteúdos extras:

- [JavaScript segundo a documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Primeiros passos na programação](https://hipsters.tech/primeiros-passos-na-programacao-a-imersao-dev-hipsters-ponto-tech-243/)
- [5 minutos de HTML](https://www.youtube.com/watch?v=3oSIqIqzN3M)





# TRUNFO, IMAGENS, MANIPULAÇÃO DO HTML E CSS





## 

Nesta oitava aula da **Imersão Dev**, vamos evoluir ainda mais nosso Trunfo, focando em exibir as cartas na tela! O código da aula para você acompanhar está aqui:

https://codepen.io/imersao-dev/pen/JjEjjZv

Neste programa, vamos descobrir que podemos alterar não só o conteúdo do HTML com Javascript. Vamos aprender como manipular o CSS e exibir nossas cartas no tela. Além disso, vamos usar o código abaixo no decorrer desta aula:

```
var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
```

## Conteúdo detalhado dessa aula

- Adicionando o campo imagem nos objetos com o caminho da imagem;
- Criar uma função que exibe a carta do jogador após o sorteio das cartas;
- Adicionar a moldura da carta;
- Escrever o resultado na tela após o duelo das cartas informando se o jogador venceu ou perdeu;
- Criar uma função que exibe a carta da máquina;
- Exibir os atributos e pontos da carta da máquina.

## Desafios dessa aula!

- Criar novas cartas com imagens e atributos diferentes.

## Links importantes para você acompanhar a aula

- [Codepen - editor de código online](https://codepen.io/)
- [HTML, CSS e JavaScript, quais as diferenças](https://www.alura.com.br/artigos/html-css-e-js-definicoes)
- [Usando o Vscode](https://www.youtube.com/watch?v=xvkuNF_8Coc)
- [Priimeira aula da iimersão com Python](https://www.youtube.com/watch?v=DsFb24TgJ0c)
- [Repositório do código final da aula 7](https://codepen.io/imersao-dev/pen/LYxYYzm)

## Links citados nessa aula

- [Mais sobre variáveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#variáveis)
- [Mais sobre a função parseFloat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

## Conteúdos extras:

- Manipular o CSS pelo JS não é tarefa fácil. Pensando nisso, vamos disponibiliar o código da função `exibiCartaJogador()`:

```
function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
```

## 