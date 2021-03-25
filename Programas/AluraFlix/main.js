var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BN2VlN2VhZWUtNjJlYi00NjI1LTk5NGQtZTE0YzA2YjZiN2NlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOTQ0MTA2NjItMzFhMy00MTU2LTgwZmEtZjcxY2VkY2VjZDlhXkEyXkFqcGdeQXVyNDgyNzAxMzY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeFilmes = ["Get Out", "Us", "Them", "A Quiet Place","Split","His House","The Witch","The Cabin in the Woods","Hereditary","BirdBox"]


var opcao = parseInt(prompt("Deseja ver o poster de qual filme? \n1- Get Out \n2- Us \n3- Them \n4- A Quiet Place \n5- Split \n6- His House \n7- The Witch \ 8- The Cabin in the Woods \n9- Hereditary \n10- BirdBox \n11- TODOS"))

switch(opcao){
  
  case 1:
    document.write("<img src=" + listaFilmes[0] + ">")    
  break;
    
  case 2:
    document.write("<img src=" + listaFilmes[1] + ">")    
  break;
    
  case 3:
    document.write("<img src=" + listaFilmes[2] + ">")    
  break;
    
  case 4:
    document.write("<img src=" + listaFilmes[3] + ">")    
  break;
    
  case 5:
    document.write("<img src=" + listaFilmes[4] + ">")    
  break;
    
  case 6:
    document.write("<img src=" + listaFilmes[5] + ">")    
  break;
    
  case 7:
    document.write("<img src=" + listaFilmes[6] + ">")    
  break;
    
  case 8:
    document.write("<img src=" + listaFilmes[7] + ">")    
  break;
    
  case 9:
    document.write("<img src=" + listaFilmes[8] + ">")    
  break;
    
  case 10:
    document.write("<img src=" + listaFilmes[9] + ">")    
  break;
    
  case 11:
    for(var i = 0; i < listaFilmes.length; i++){
        document.write("<img src=" + listaFilmes[i] + ">")
    }      
  break;

  default:
    alert("OPCAO INVALIDA")

}



