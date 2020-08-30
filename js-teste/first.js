console.log("Parte 1")

const idade = 26;

console.log(idade);

const peso = 80;

const imc = idade + peso;

console.log(imc);

console.log(idade + peso);

console.log("Parte 2");

const nome = "JoseKelcio";

const sobrenome = "Sizenando";

const idadenova = 30;

const anoNascido = 1983;

console.log((10+8)*2);

console.log("Ano " +2020);

console.log("2"+"2");

console.log(parseInt("2")+ parseInt("2"));

console.log(2+2);

console.log("10" / "2");

console.log("Ricardo" / 2); //Not a Number

console.log(6.5); //6.5

console.log(4,5); //4 5

console.log("parte 3");

const age = 29;

const name = "Size";

const surName = "Nando";

console.log(name, surName);

console.log(name + surName);

console.log(name + " " +  surName);

console.log(`My name is: ${name} ${surName}`);


let localName = name + surName;

console.log(`My name is: ${localName}`);


let dia = "sabado";

function fimDeSemana(dia){
	//criação do switch
    switch(dia){
        case `segunda` :
            console.log(`você tem aulas!`);
            break;
        case `quarta`:
             console.log(`você tem aulas!`);
             break;
        case `sexta-feira`:
             console.log(`você tem aulas!`);
             break;
        default:
            console.log(`você não tem aulas`);
    }
}

fimDeSemana(dia);