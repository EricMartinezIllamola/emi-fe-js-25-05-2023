// Funciones de arrays

let fruta = ["naranja","manzana","mango"];
console.log(fruta);
console.log(fruta.length);

console.log(fruta.toString());
console.log(fruta.join(" "));

fruta[3] = "cereza";
fruta.push("sandia");
console.log(fruta);

fruta.pop();
console.log(fruta);

console.log(fruta.reverse());

console.log(fruta.slice(0,2));

let dias = "lunes,martes,miercoles,jueves,viernes";
let newArray = dias.split(",");
console.log(newArray);