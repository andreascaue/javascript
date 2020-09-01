let organizacao = "Petshop Node";

console.log(organizacao);


function naoPareDeContarImparesAte(numero) {
    let quantidade = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 1) {
            quantidade = quantidade + 1;
        }
    }
    return quantidade;
}

console.log(naoPareDeContarImparesAte(10));