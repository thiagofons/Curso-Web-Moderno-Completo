// Parte 1
/*
console.log("Parte 1");

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("i =", i);
*/

// Parte 2
console.log("Parte 2");

const funct = [];
for(let i = 0; i < 10; i++) {
    funct.push(function () {
        console.log(i);
    });
}

funct[0]();
funct[1]();