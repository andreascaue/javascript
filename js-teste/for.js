function naoPareDeContarImparesAte(numero){
    // Escreva aqui o seu código
    var contador = 0;
    for(var volta = 0; volta <= numero; volta++){    
        if(volta % 2 != 0){
            contador++;          
        }       
    }
    return contador;  
}

console.log(naoPareDeContarImparesAte(10));