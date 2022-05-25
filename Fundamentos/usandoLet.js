/*
var:
- escopo global e de função

let:
- escopo global, de função e de bloco
*/

// Parte 1
let numero = 1;
{
    let numero = 2;
    console.log("Dentro =", numero);
}
console.log("Fora =", numero);