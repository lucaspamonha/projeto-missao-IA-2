const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem ganhou a Liga dos Campeõs da UEFA da temporada 1971/72?",
        alternativas: [
            {
                texto: "Ajax.",
                afirmacao: "Certo."
            },
            {
                texto: "Juventus.",
                afirmacao: "Errado."
            }
        ]
    },
    {
        enunciado: "Que jogador marcou 91 gols em 2012?",
        alternativas: [
            {
                texto: "Cristiano Ronaldo.",
                afirmacao: "Errado."
            },
            {
                texto: "Messi.",
                afirmacao: "Certo."
            }
        ]
    },
    {
        enunciado: "Em que ano a Inglaterra ganhou a Copa do Mundo da Fifa?",
        alternativas: [
            {
                texto: "1986.",
                afirmacao: "Errado."
            },
            {
                texto: "1966.",
                afirmacao: "Certo."
            }
        ]
    },
    {
        enunciado: "O que significa a expressão Poker-trick no futebol?",
        alternativas: [
            {
                texto: "Quando um jogador faz 3 gols na partida.",
                afirmacao: "Errado."
            },
            {
                texto: "Quando o jogador faz 4 gols na partida.",
                afirmacao: "Certo."
            }
        ]
    },
    {
        enunciado: "Qual é o maior campeão da Copa Libertadores da América? ",
        alternativas: [
            {
                texto: "Independiente.",
                afirmacao: "Certo."
            },
            {
                texto: "Boca Juniors.",
                afirmacao: "Errado. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
