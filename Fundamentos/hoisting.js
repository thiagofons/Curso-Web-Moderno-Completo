// Içamento ocorre somente com o VAR e não com o LET

function testeVar() {
    console.log("a = ", a);
    var a = 2;
    console.log("a = ", a);
}

function testeLet() {
    console.log("a = ", b);
    let b = 3;
    console.log("a = ", b);
}

testeVar();
testeLet();