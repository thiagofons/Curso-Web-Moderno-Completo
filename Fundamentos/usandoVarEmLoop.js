// Parte 1
console.log("Parte 1");
for(var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("i =", i);


// Parte 2
console.log("Parte 2");
const funcs = [];

for(var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}

funcs[2]();
funcs[8]();
