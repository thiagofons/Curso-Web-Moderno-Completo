// Parte 1
{{{{ var sera = "Será???" }}}}

console.log(sera);

function teste() {
    var local = 123;
}
teste()

// Parte 2
var numero = 1;
{
    var numero = 2;
    console.log("Dentro =", numero);
}
console.log("Fora =", numero);