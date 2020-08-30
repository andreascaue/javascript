let idadeComprador = 19; 

const listaDeDestinos = new Array(
    `Salvador`,
    `Rio de Janeiro`,
    `Natal`,
    `Maceio`,
    `Aracaju`
   );

   if(idadeComprador >= 18){
        console.log(listaDeDestinos.splice(1,5));
   }
   else if(idadeComprador < 18 ){
        console.log(listaDeDestinos.splice(1,1)); 
   }


    console.log(idaddeComprador > 18);
    console.log(idadeComprador < 18);
    console.log(idadeComprador >= 18);
    console.log(idadeComprador <= 18);
    console.log(idadeComprador == 18);    
