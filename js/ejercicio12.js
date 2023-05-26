let usuarios = [
    {
        nombre: "pepe",
        contraseña: "peep87",
        numComentarios: 18
    },
    {
        nombre: "xavi",
        contraseña: "xavi123",
        numComentarios: 103
    },
    {
        nombre: "maria",
        contraseña: "maria97",
        numComentarios: 61
    }
]

// let allNombres = usuarios.map(function(a) {return a.nombre})

let allNombres = usuarios.map(a => a.nombre);

// let allNombres = usuarios.map(a => `${a.nombre} --/-- ${a.numComentarios}`)

console.log(allNombres);