function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
  
    if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('</iframe>')){
      listarFilmesNaTela(filmeFavorito)  
  } else{
      alert("Imagem Inválida")
  }
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    if(filme.endsWith('.jpg')){
        var elementoFilme = "<img src=" + filme + ">"
    }
    else{
        var elementoFilme = filme
    }
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }


