# ALURAFlix :movie_camera::clapper::cinema:



No nosso dia-a-dia é normal trabalharmos com quantidades grandes de dados. Imaginem uma lista de nomes de estudantes em uma escola, ou de todos os filmes do gênero "terror" em uma plataforma. Não é prático criarmos uma variável para cada informação, então utilizamos muitas *estruturas de dados* para fazer isso.

Link do projeto base:

https://codepen.io/imersao-dev/pen/XWpWrYm

Nesta aula vamos ver a primeira delas, `array`, um tipo de *lista de elementos*, assim como algumas ferramentas para alterarmos e trabalharmos com estas listas. Depois de criarmos uma lista, vamos exibir os pôsters de todos os nossos filmes preferidos na tela do navegador. Durante esta aula, usaremos o código abaixo:

```
function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
```

## Conteúdo detalhado dessa aula

- Criar uma primeira array de filmes usando a sintaxe `[]`;
- Utilizar o método `filmes.push("Nome Do Filme")` para inserir um novo elemento na lista (ou seja, um novo filme na array);
- Descobrir a quantidade de elementos em uma array com o método `array.length`;
- Selecionar elementos de uma array utilizando a sintaxe `array[número]`, lembrando sempre que o primeiro índice começa com *zero*, ou seja, `array[0]` para o primeiro elemento;
- Utilizar a instrução `for` para *iterar*, ou seja, percorrer todos os elementos de uma array;
- Criar uma array com imagens de pôsters de alguns filmes que gostamos;
- Montar a lógica do programa que vai *iterar* esta array de filmes e exibir cada um deles na tela, integrando o `for` do JavaScript com a tag `<img>` do HTML.

## Desafios dessa aula!

- Criar uma array adicional com o nome dos filmes e trabalhar com as duas ao mesmo tempo, unindo imagens e textos através dos *índices*;
- Exibir um `prompt()` com uma lista de filmes e exibir na tela somente o filme escolhido pelo usuário através do prompt;
- Continuando o desafio acima, como fazer com que um filme só seja exibido uma vez?

## Links importantes para você acompanhar a aula

- [Codepen com o código inicial](https://codepen.io/imersao-dev/pen/51db666e8bab142fd0e4f48e535581c7)
- [IMDb para pesquisar as imagens dos filmes](https://www.imdb.com/)

## Links citados nessa aula

- [Documentação da MDN sobre arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)