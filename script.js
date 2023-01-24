const ultimaPergunta = 5;
let quantidadeDeAcertos = 0;
let perguntaAtual = 1;
let indicador = document.querySelector("#indicador");
function checarResposta(event) {
  const tagDoElemento = event.target.tagName;
  if (tagDoElemento !== "BUTTON") {
    return;
  }
  const classeDoBotao = event.target.className;
  const classeOpcaoCerta = "opcao-certa";

  if (classeDoBotao === classeOpcaoCerta) {
    quantidadeDeAcertos++;
  }

  const divPerguntaAtual = document.querySelector(".pergunta-" + perguntaAtual);
  divPerguntaAtual.classList.add("escondido");

  perguntaAtual++;

  if (perguntaAtual > ultimaPergunta) {
    const divResultado = document.querySelector(".resultado");
    divResultado.classList.remove("escondido");

    const textoAcertos = document.querySelector(".acertos");
    textoAcertos.innerText = quantidadeDeAcertos;

    indicador.classList.add("escondido");
    return;
  }

  const divProximaPergunta = document.querySelector(
    ".pergunta-" + perguntaAtual
  );

  divProximaPergunta.classList.remove("escondido");
  const textoPerguntaAtual = document.querySelector(".perguntaAtual");
  textoPerguntaAtual.innerText = perguntaAtual;
}
function voltarParaOInicio() {
  quantidadeDeAcertos = 0;
  perguntaAtual = 1;

  const divProximaPergunta = document.querySelector(
    ".pergunta-" + perguntaAtual
  );
  divProximaPergunta.classList.remove("escondido");

  const textoPerguntaAtual = document.querySelector(".perguntaAtual");
  textoPerguntaAtual.innerText = perguntaAtual;

  const divResultado = document.querySelector(".resultado");
  divResultado.classList.add("escondido");
  const gabarito = document.querySelector("#gabarito");
  gabarito.classList.add("escondido");

  indicador.classList.remove("escondido");
}
function verGabarito() {
  const gabarito = document.querySelector("#gabarito");
  gabarito.classList.toggle("escondido");
}
