// let arrayUno = ["Èric","Martínez Illamola",28,"Tagamanent 40","La Garriga", "España"];

// let [A, B, C, ...otros] = arrayUno;

// console.log(A);
// console.log(B);
// console.log(C);
// console.log(A,B,C);
// console.log(otros);

let datos = {
    nombre: "Èric",
    apellidos: "Martínez Illamola",
    edad: 28,
    direccion: "Tagamanent 40",
    ciudad: "La Garriga",
    pais: "España"
}

let {nombre, apellidos, edad, ...localizacion} = datos

console.log(nombre, apellidos, edad);
console.log(localizacion);