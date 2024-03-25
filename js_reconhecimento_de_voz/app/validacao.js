function valorValidoOuNao(chute){
    // Converter para Int
    const numero = +chute

    if (chute == "game over" || chute == "tchau"){
        document.body.innerHTML = `
            <h2> Já vai?? =< </h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }   

     if (chute == "Easter Egg"){
         document.body.innerHTML = `
             <h2>OVO DE PASCOA<h2>
             <button id="jogar-novamente" class="btn-jogar">Jogar novamente<button>
        `
     } 

    if (chuteInvalido(numero)){
        elementoChute.innerHTML += `
            <div>Por favor, me diga um número</div> 
        `
        return
    }

    if(chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
            <div>Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
         return
    } 

    if(numero === numeroSecreto){
        //Redesenahr a tela
        // += Adiciona (Antigo + Atual)
        // =  Somente esse (Atual)
        document.body.innerHTML = `
            <h2>Parabéns! Número Correto!</h2>
            <h3>Número secreto: ${numeroSecreto} =)</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    
    if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }

    if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
