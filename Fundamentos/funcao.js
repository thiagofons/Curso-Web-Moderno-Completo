// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

// Funcao com retorno 
function soma(a, b = 0) {
    return a + b;
}

// Armazenando funcao em variavel
const varImprimirSoma = function (a, b) {
    console.log(a + b);
}

// Armazenando uma funcao arrow em uma variavel
const arrowSoma = (a, b) => {
    return a + b;
}

// Jeito mais compacto ainda
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));
