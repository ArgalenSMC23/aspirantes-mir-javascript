
//
let persona = {
    nombre: "Simón Maya Correa",
    edad: 31,
    ciudad: "Medellín",
    profesión:"Ingeniero ambiental",
}

console.log(persona);

function presentacion(persona){
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["Pintura", "Forografía", "Buceo"]

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i])
}