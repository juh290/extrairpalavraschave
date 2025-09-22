import { PALAVRAS_RUINS } from "./palavrasruins";

const botaoMostraPalavras = document.querySelector ('#botao-palavraschaves');

botaoMostraPalavras.addEventListener ('click', mostraPalavrasChaves);

function mostraPalvrasChave () {
    const texto = document.querySelector('entrada-de-texto').value;
    const campResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(",");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    
    for(let i in palavras) {
        palavras [i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1,p2){
        return frequencias[p2] - frequencias[p2];
    }

    return ordenadas.slice(0,10);
    
}

function contaFrequencia(palavras) {
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i]=0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i] ++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    const palavrasBoas = [];
    for (let palavras of palavras) {
        if(!PALAVRAS_RUINS.has(palavras) &&palavras.length >2) { 
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}