// escribe la función sum acá

let array = []

function sum(number) {
    // Definición variable acumulada
    let total = 0;
    
for (let i = 0; i < number.length; i ++) {
    //Suma al valor anterior
    total += number[i]
}
    return total
}


console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

