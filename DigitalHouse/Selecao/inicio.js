var carac = '#'; 
for(var i = 1; i <= 7; i++){ 
    console.log(carac); carac += '#'; 
}

for(var i=0; i<=100; i++){ 
    if(i % 3 == 0 && i % 5 ==0){ 
        console.log('FizzBuzz'); 
    }else if(i % 3 == 0){ 
        console.log('Fizz');
    }else if(i% 5 == 0){ 
        console.log('Buzz'); 
    }else{ 
        console.log(i); 
    }
}

for(var i = 1; i <= 8; i++){ 
    var strin = ''; for(var j = 1; j <= 8; j++)
    {
        if(j%2==0){ 
            strin += '#'; 
        }else{ 
            strin += ' '; 
        } 
    } 
    console.log(strin); 
    console.log('\n');
}

//Closure 
function multiplier(factor) { 
    return function(number) { 
        return number * factor; 
    }; 
}

var twice = multiplier(2); 
console.log(twice(5)); // → 10

//Recursão 
function power(base, exponent) { 
    if (exponent == 0) 
        return 1; 
    else 
        return base * power(base, exponent - 1); 
}

console.log(power(2, 3)); // → 8