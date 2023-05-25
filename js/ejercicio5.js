let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

let arrayTres = [];

for (let i = 0; i < arrayUno.length; i++) {
    arrayTres.push(arrayUno[i], arrayDos[i]);
}

arrayUno = [];
arrayDos = [];

console.log(arrayTres);