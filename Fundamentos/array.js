const valores = [7.7, 8.3, 6.5, 8.9];

console.log(valores[0]);

valores[4] = 20;    // Adiciona valores ao final do array diretamente
valores[5] = 30;
console.log(valores);

valores.push({id: 3}, false, null, "teste");    // Add valores no final
console.log(valores);

valores.pop();  // Remove valores do final
console.log(valores);

delete valores[6];  // Deleta um valor de uma posicao especifica
console.log(valores);

console.log(typeof valores);  // Array eh um objeto