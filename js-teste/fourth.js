let contador = 0;
let destinoExite = false;
const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `Natal`,
    `Maceio`,
    `Aracaju`
   );

   const destino = "Curitiba";

while(contador <3){
    if(listaDeDestinos[contador] == destino){
     
        destinoExite = true;
        break;
    }    
    else{
        desetinoExiste = false;
    }

    contador += 1;
}

console.log("Destino existe:" , destinoExite);