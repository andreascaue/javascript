

/*
Para este exercício, fornecemos a função de contagem já declarada. Esta função receberá dois parâmetros numéricos. Queremos que a função vá do primeiro parâmetro para o segundo e imprima o texto pelo console "O número atual é__ e é menor que__".[
Por exemplo, se passarmos os números 4 e 6, veremos algo assim:

"O número atual é 4 e é menor que 6"
"O número atual é 5 e é menor que 6"
*/ 

function count(inicio, fim) {
    //Escreva seu código aqui 
    do {
        if(inicio < fim)
            console.log("O número atual é " + inicio + " e é menor que " + fim);
        inicio = inicio + 1;
    } while(inicio < fim)
    
   
}

count(2,10);

function count(inicio, fim) {
    //Escreva seu código aqui 
        while(inicio < fim) {            
                console.log("O número atual é " + inicio + " e é menor que " + fim);
          
            inicio = inicio + 1;
    } 
}

count(2,10);

/*Queremos construir uma função que receba um array de números como parâmetro. A função deve passar por esse array e imprimir cada um dos números pelo console. Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".
Para resolver este exercício, você DEVE usar o do-while.*/

var arr = [1,2,3,4,5,6,7,8,9,10,11,13,14];

function dowhile(arr){    
    let i = 0;    
    do {     
        if(arr[i] === 5)
            console.log("Encontramos um 5!");
        i = i + 1;    
    } while (i < arr.length);      
}

console.log(dowhile(arr));


/*
Para este exercício, oferecemos a função tabelaDeMultiplicacao já definida, que recebe um número como parâmetro. Queremos que a função mostre a tabela de multiplicação de 1 a 10 do número que recebe quando a função é executada.
Por exemplo, se o número que passarmos por parâmetro for 5, a função deverá imprimir:
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
...
até chegar ao 10.
*/

function tabelaDeMultiplicacaofor(numero) {
    //Escreva seu código aqui
   for(var i = 1; i <= 10; i++){
       let mult = i * numero;
       console.log(numero + " * " + i + " = " + mult);
   }	 
}

//tabelaDeMultiplicacaofor(9);


function tabelaDeMultiplicacao(numero) {
    //Escreva seu código aqui
   let i = 1;
   while(i <= 10){
       let mult = i * numero;
       console.log(numero + " * " + i + " = " + mult);
       i++;
   }	 
}

tabelaDeMultiplicacao(9);
