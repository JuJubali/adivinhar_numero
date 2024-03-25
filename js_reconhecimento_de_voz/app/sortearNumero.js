const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número Secreto: ", numeroSecreto);

// Pegar o valor do HTML
const elementoMenorValor = document.getElementById('valor-menor');
const elemenotMaiorValor = document.getElementById('valor-maior');

// Manipular o valor do HTML
elementoMenorValor.innerHTML = menorValor;
elemenotMaiorValor.innerHTML = maiorValor;
