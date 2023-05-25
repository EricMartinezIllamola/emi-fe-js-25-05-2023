// Ejemplo de array

let A = 1;
let B = "patata";
let C = true;

let valores = ["hola",14,true,null,7,8,[1,2,3,4]];

let extension = valores.length;
let pos1 = valores[1];
valores[1] = 89;

console.log(valores);
console.log(valores[6][0]);