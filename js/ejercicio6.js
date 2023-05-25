let arrayUno = [1,2,3,4,5,6,7,8,9,10];

let arrayPar = [];
let arrayImpar = [];

for (let i = 0; i < arrayUno.length; i++) {
    if (arrayUno[i] % 2 == 0) {
        arrayPar.push(arrayUno[i]);
    } else {
        arrayImpar.push(arrayUno[i]);
    }    
}

let arrayDos = [].concat(arrayPar, arrayImpar);

console.log(arrayUno);
console.log(arrayPar);
console.log(arrayImpar);
console.log(arrayDos);