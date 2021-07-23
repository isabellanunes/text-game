let imagem = document.getElementById('imagem');
let texto = document.getElementById('texto');
let areaEscrita = document.getElementById('areaEscrita');
let areaBotao = document.getElementById('areaBotao');
let nomeDoDog;

let cenario = {
    um: {
        texto: "Você finalmente decidiu levar seu cachorro para passear. Você sorri e afaga a cabeça do seu amigo, ele está feliz. Qual é o nome do seu cachorro?"
    },
    dois: {
        texto: "Seu cachorro puxa a coleira. Você ouve latidos de outros cachorros que estão se aproximado e logo a frente você vê uma casa abandonada. Estranhamente a porta está aberta. O que você quer fazer?",
        botoes: 
        [ 
            ['Ir para longe dessa casa assustadora', 'avancePara(cenario.tres)'],
            ['Entrar na casa', 'avancePara(cenario.quatro)']
        ]
    },
    tres: {
        texto: "Os latidos que você ouvia se mostram ser de uma gangue de cachorros da rua que correm em sua direção. Você corre, mas eles atacam vocês. Seu cachorro luta contra eles e vocês correm para entrar na casa abandonada em busca de abrigo. Seu cachorro está chorando e pode estar ferido.",
        botoes: 
        [
            ["Continuar", "avancePara(cenario.quatro)"]
        ]
    },
    quatro: {
        texto: "Seu cachorro correu para o porão, latindo alto e chorando. Você se pergunta o que há lá embaixo. A porta emperrou quando você a fechou atrás de você. Você vai precisar de algo para abri-la quando voltar.",
        botoes:
        [
            ["Ir atrás do seu cachorro", "avancePara(cenario.cinco)"],
            ["Procurar por uma faca na cozinha", "avancePara(cenario.cinco)"]
        ]
    },
    cinco: {
        texto: "Você vasculha a velha cozinha e não encontra nada, mas algo te chama atenção: o lixo da casa, que outrora deveria ser habitada e havia no meio de dota a sujeira um bilhete com diversas palavras escritas em uma linguagem estranha, que naquele momento você não entende.",
        botoes:
        [
            ["Pegar o papel e guardar", "avancePara(cenario.sete)"],
            ["Deixar o papel", "avancePara(cenario.seis)"]
        ]
    },
    seis: {
        texto: "Você ouve o seu cachorro chorando muito e decide ir atrás dele, depois você se preocupa em sair."
    }
};

let mudarTexto = function(textos) {
    texto.innerHTML = textos.replaceAll("Seu cachorro", nomeDoDog);
};

let mudarBotoes = function(listaBotoes) {
    areaBotao.innerHTML = "";
    for (let i=0; i < listaBotoes.length; i++) {
        areaBotao.innerHTML += "<button onClick="+listaBotoes[i][1]+">" + listaBotoes[i][0] + "</button>";
    }
}

let avancePara = function(numeroDaCena) {
    mudarTexto(numeroDaCena.texto);
    mudarBotoes(numeroDaCena.botoes);
}

 areaEscrita.onkeypress = function(evento) {
    if(evento.key == 'Enter' || evento.keyCode == 13) {
        nomeDoDog = areaEscrita.value;
        areaEscrita.parentNode.removeChild(areaEscrita);
        avancePara(cenario.dois);

    }
 }

avancePara(cenario.um);