// escribe la función max acá
// i=1 vs i=2
// variable x = max

// max vs i=3..

function max(number){
    if (number.length ===0){
        return undefined;
    }

let maxNumber = number[0]
    for (let i =1; i< number.length; i ++){
        if (number[i]>maxNumber) {maxNumber = number[i];
        }
    }

    return maxNumber
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined