let organizacao = "Petshop Node";

let pets2 = ["yoshi","pituco"];

for (i = 0; i < pets2.length; i++){
    console.log(pets2[i]);
}

let pets = [{
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino'
  }
  ,{
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'Calopsita',
    idade: 3,
    genero: 'Fêmea'
  }];
  
  
   for (const i of pets){
       console.log(i.nome, i.tipo, i.raca, i.idade, i.genero)
   }

   for (let i=0;i<pets.length;i++){
    console.log(pets[i].nome+" | "+pets[i].tipo);
}
