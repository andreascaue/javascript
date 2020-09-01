let person = {
    name: "Sizenando",
    age: "99",
    altura: 1.80
}

let json = JSON.stringify(person);
console.log(json);
let Obj = JSON.parse(json);
console.log(Object);

let groceryList = ["pão","presunto","queijo"]
let newJson = JSON.stringify(groceryList);
console.log(newJson);
let newObject = JSON.parse(newJson);
console.log(newObject);



