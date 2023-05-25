let arrayUno = [1,2,3,4,5,6,7,8,9,10];
let arrayDos = [];

for (let i = 0; i < arrayUno.length; i++) {
    if (arrayUno[i] > 5) {
        arrayDos.push(arrayUno[i]);
    }   
}

console.log(arrayDos);