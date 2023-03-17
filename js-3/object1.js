let pedro = {
    nombre : "Pedro Pérez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"]
}

console.log (pedro.edad); 
console.log (pedro.hobbies);

pedro.estatura = 1.8;

delete pedro.activo;

//

const llavesPedro = Object.keys(pedro)
for (let i = 0; i < llavesPedro.length; i++){
    console.log(llavesPedro[i] + ": " + pedro[llavesPedro[i]])
}

//Se agrega
pedro.saluda = function() {
    consol.log("Hola, me llamo " + pedro.nombre) 
}

console.log(pedro.saluda());