var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function() {
        console.log("QUACK!!!");
    }
};

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function() {
        console.log("Estoy encantado de conocerle.");
    }
};

var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function() {
        console.log("Hi there!");
    }
};

// Ejercicios:
// Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden asignar valores de variables y no quemar valores dentro del arreglo.
const grupoPinguinos = [gunter, ramon, fred]

// Escriba un ciclo for para iterar a través de cada pingüino en la matriz e imprima el valor de la propiedad del nombre de cada pingüino en la consola.
console.log("* Escriba un ciclo for para iterar a través de cada pingüino en la matriz e imprima el valor de la propiedad del nombre de cada pingüino en la consola.");
console.log("");

const pinguinos = grupoPinguinos.map((pinguino) => {
    console.log(pinguino.name);
});
console.log("");
// Imprima la longitud de la matriz de pingüinos en la consola.
console.log("* Imprima la longitud de la matriz de pingüinos en la consola.");
console.log("");

let longitudMatriz = 0
for (var i = 0; i < grupoPinguinos.length; i++) {
    const llaves = Object.keys(grupoPinguinos[i]);
    longitudMatriz += llaves.length;
}
console.log(longitudMatriz);
console.log("");
// Escriba un ciclo for para iterar a través de cada pingüino en la matriz y agregue una nueva propiedad a cada pingüino llamada numberOfFeet con un valor aleatorio del 1 al 5.
console.log("* Escriba un ciclo for para iterar a través de cada pingüino en la matriz y agregue una nueva propiedad a cada pingüino llamada numberOfFeet con un valor aleatorio del 1 al 5.");
console.log("");

const pinguinosWithFoots = grupoPinguinos.map((pinguino, index) => ({
    name: pinguino.name,
    origin: pinguino.origin,
    canFly: pinguino.canFly,
    sayHello: pinguino.sayHello,
    numberOfFeet: Math.floor(Math.floor(Math.random() * 11) / 2)
}));
console.log(pinguinosWithFoots);
console.log("");
// Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y para cada pingüino que pueda volar, imprima en la consola un mensaje que contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos que no pueden volar).
console.log("* Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y para cada pingüino que pueda volar, imprima en la consola un mensaje que contenga el nombre del pingüino y \"¡puede volar!\" - por ejemplo, \"¡Gunter puede volar!\" o \"¡Ramón puede volar!\" (No hagas nada por los pingüinos que no pueden volar).");
console.log("");
const pinguinosQueVuelan = pinguinosWithFoots
    .filter((pinguino) => pinguino.canFly)
    .forEach((pinguinoVolador, index) => console.log(`${pinguinoVolador.name} puede volar!`));

// Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies.
console.log("Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies.");
console.log("");
const pinguinosConMasPies = pinguinosWithFoots
    .filter((pinguino) => pinguino.numberOfFeet > 2)
console.log(pinguinosConMasPies);
console.log("");

// Agregue una nueva propiedad a su pingüino llamada favoriteFoods y configúrela igual a una matriz que contiene una lista de tres cadenas.
console.log("Agregue una nueva propiedad a su pingüino llamada favoriteFoods y configúrela igual a una matriz que contiene una lista de tres cadenas.");
console.log("");

let pinguinosWithFavFood = pinguinosWithFoots.map((pinguino, index) => ({
    name: pinguino.name,
    origin: pinguino.origin,
    canFly: pinguino.canFly,
    sayHello: pinguino.sayHello,
    numberOfFeet: pinguino.numberOfFeet,
    favoriteFoods: ["Pizza", "Olla de Carne", "Sushi"]
}));

console.log(pinguinosWithFavFood);
console.log("");
// Accede a la segunda comida favorita de sus pingüinos e imprímela en la consola usando console.log()
console.log("Accede a la segunda comida favorita de sus pingüinos e imprímela en la consola usando console.log()");
console.log("");
pinguinosWithFavFood.forEach((pinguino, index) => console.log(pinguino.favoriteFoods[1]));
console.log("");
// Sin modificar nada de su código anterior, escriba una nueva línea de código que cambie el valor del último elemento de la lista a "piñas" (sobrescribiendo el valor anterior).
console.log("Sin modificar nada de su código anterior, escriba una nueva línea de código que cambie el valor del último elemento de la lista a \"piñas\" (sobrescribiendo el valor anterior).");
console.log("");

pinguinosWithFavFood = pinguinosWithFavFood.map((pinguino, index) => ({
    name: pinguino.name,
    origin: pinguino.origin,
    canFly: pinguino.canFly,
    sayHello: pinguino.sayHello,
    numberOfFeet: pinguino.numberOfFeet,
    favoriteFoods: pinguino.favoriteFoods.map(
        (favFood, index) => {
            return (index > 1) ? "Piñas" : favFood;
        }
    )
}));
console.log(pinguinosWithFavFood);

console.log("");
// Escriba un ciclo for para recorrer cada comida en la propiedad de comida favorita de sus pingüinos e imprima cada una en la consola.
console.log("Escriba un ciclo for para recorrer cada comida en la propiedad de comida favorita de sus pingüinos e imprima cada una en la consola.");
pinguinosWithFavFood.forEach(pinguino => {
    pinguino.favoriteFoods.forEach(food => {
        console.log(food);
    })
});

console.log("");
console.log("");