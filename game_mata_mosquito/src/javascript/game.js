//VARIAVEIS
var height;
var width;
var life = 1;
var time = 30;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

//DEFINE O NIVEL DE DIFICULDADE

function configDificulty() {
  if (nivel === "muitoDificil") {
    setInterval(Main, 700);
  } else if (nivel === "normal") {
    setInterval(Main, 1500);
  } else if (nivel === "dificil") {
    setInterval(Main, 1000);
  } else {
    setInterval(Main, 2000);
  }
}

configDificulty();

//FUNÇÃO QUE ENGLOBA TODAS AS OUTRAS FUNÇOES
function Main() {
  //DEFINE O TEMPO DE JOGO DO USUÁRIO
  var cronometro = () => {
    time--;
    document.getElementById("cronometro").innerHTML = time + "s";

    if (time == 0) {
      window.location.href = "./vitoria.html";
    }
  };

  //FUNÇÕES
  function ajustaPalcoDoJogo() {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  function positionRandom() {
    function vidasDoMosquito() {
      document.getElementById("v" + life).src = "../assets/coracao_vazio.png";
      console.log("elemento selecionado foi " + life);

      if (life > 3) {
        //window.alert("game over");
        window.location.href = "./fim_de_jogo.html";
      }
    }

    //remove o mosquito anterior(caso exista);
    if (document.getElementById("mosquito")) {
      document.getElementById("mosquito").remove();
      vidasDoMosquito();

      life++;
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    //CRIA O ELEMENTO HTML REPRESENTANDO O MOSQUITO HTML
    var mosquito = document.createElement("img");
    mosquito.src = "../assets/mosca.png";
    mosquito.className = sizeRandom() + " " + sideRandom();
    mosquito.style.left = positionX + "px";
    mosquito.style.top = positionY + "px";
    mosquito.style.position = "absolute";
    mosquito.id = "mosquito";
    mosquito.onclick = function () {
      this.remove();
    };

    document.body.appendChild(mosquito);
  }

  function sizeRandom() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
      case 0: {
        return "mosquito1";
      }
      case 1: {
        return "mosquito2";
      }
      case 2:
        return "mosquito3";
    }
  }

  function sideRandom() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
      case 0:
        return "ladoA";
      case 1:
        return "ladoB";
    }
  }

  //CHAMADA DE FUNÇÕES

  cronometro();
  ajustaPalcoDoJogo();
  positionRandom();
}
