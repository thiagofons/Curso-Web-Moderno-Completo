function Obj(nome) {
    // Cria um atributo "nome" para a funcao
    this.nome = nome;

    this.exec = function() {
        console.log("Exec....");
    }
}

// Instancia um objeto
const obj2 = new Obj("Thiago"); 
const obj3 = new Obj("Lucas");

console.log(obj2.nome);
console.log(obj3.nome);

obj2.exec();