
function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i !== array.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  console.log(join)

// arrays de ejemplo

console.log(join([1, 3, 2])) // 1 3 2
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 10 9 8 7 6 5 4
console.log(join(["Fredy", "Andres","Pedro", "Juan"])) 
// Fredy Andrés Pedro Juan
