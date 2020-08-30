let texto = `Olá, sou uma função`;

function exemplo(textoVar){    
    return  texto;   
}

console.log(exemplo(texto));


function anterior(numero){    
    return numero - 1;
}

function triplo(numero){
    return numero * 3;
}

function anteriorDoTriplo(numero){
    return anterior(triplo(numero));
}


let linguagem = "javascript";

if ( linguagem === `javascript` )
    console.log("Estou aprendendo");
else
    console.log(`Vou aprender mais pra frente`);


let dia = 'segunda-feira'

function fimDeSemana(dia) {	
    
    if (dia == 'sexta-feira') {
    	console.log('Bom fim de semana!')
	} else if (dia == 'segunda-feira') {
    	console.log('Boa semana!')
	} else {
    	console.log('Bom dia!')
	}
}


let dia = 'segunda-feira'

function fimDeSemana(dia){
switch (dia){
    case('sexta-feira') :
    	console.log('Bom fim de semana!');
        break;
	case( 'segunda-feira') :
    	console.log('Boa semana!');
        break;
	default :
    	console.log('Bom dia!')	
}
}

fimDeSemana(dia);




