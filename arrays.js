/* sintaxe Informal */

const arr = new Array()
const arr2 = new Array(true, "Daniel", 28, new Array(2, 4, 10))
arr[0] = "Gabriel"
arr[1] = 40
console.log(arr)
// console.log(arr2[3][3]) Acessa um Array dentro de outro Array (arr2 > array)
console.log(arr2[3][arr2[3].length - 1])

/* sintaxe Literal / Mais Utilizada */

const arr3 = ["Daaa", 40, [3, 6, 9], true]
arr3[4] = "1" // Adicionando valor dentro de um array
arr3[arr3.length] = "2" 
arr3.push("push") //Adicionando valor no array com o push
arr3.push("a", "b", "c") //Adicionando diversos valores com o push de uma vez

console.log(arr3) // Mostrando Array
console.log(arr3[2]) // Mostrando array dentro do arr3
console.log(arr3[2][0]) // Mostrando valor dentro do array que está dentro do Arr3
let n = 6
console.log(arr3[n]) // Chamando um valor dentro de um array com variáveis

