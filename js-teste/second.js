let idade; 

idade = 26; //

idade = ++idade;

console.log(idade);

console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
 `Salvador`,
 `Rio de Janeiro`,
 `Natal`,
 `Maceio`,
 `Aracaju`
);

console.log(listaDeDestinos);

listaDeDestinos.push('João Pessoa');

console.log(listaDeDestinos);

//listaDeDestinos = 2; //Assignment to constant variable;

listaDeDestinos.splice(1,1); // Remove UM item da segunda posição

console.log(listaDeDestinos);

console.log(listaDeDestinos[0],listaDeDestinos[2]);

