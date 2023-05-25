let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

for (let i = 0; i < javascript1.length; i++) {
    for (let j = 0; j < javascript2.length; j++) {
        if (javascript1[i] == javascript2[j]) {
            console.log(javascript1[i]);
        }
    }
}