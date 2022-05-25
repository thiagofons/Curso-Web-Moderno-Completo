const saudacao = "Opa"; // Contexto lexico: local fisico do codigo onde a variavel foi definida

function exec() {
    const saudacao = "Falaaa" // Outro contexto lexico
    return saudacao;
}

// Podem existir variaveis de mesmo nome, desde que estejam em contextos diferentes
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
