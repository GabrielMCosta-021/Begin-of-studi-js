// console.log("Javascript funciona")

/*** REVISÃO ***/

// let n1 = "4.s5s"
// n1 = parseFloat(n1) 

// let n2 = 3

// console.log(n1 + n2, typeof n1, typeof n2)

//parseInt, parseFloat, Number()

/** Op. Lógicos  **/
// (+)soma, (-)subt., (*)mult, (/)div., (%)resto e (**)potenc. {não bem interpretado pelo browser}

// let n1 = 10
// let n2 = 5
// console.log(n1 + n2)
// console.log(n1 - n2)
// console.log(n1 * n2)
// console.log(n1 / n2)
// console.log(n1 % n2)
// console.log(2 ** 3);

/** Op. de Atribuição **/

// let n3 = 20
// = , +=, -=, *=, %=, **=


/** Incremento e Decremento **/

// let i = 0
// i++
// i++
// i--
// console.log(i--)
// console.log(--i)

/** Comparação **/
/*
    igualdade de valor ==
    igualdade de valor e tipo === 
    <, <=, >, >=
    != valores diferentes
    !== valores e tipos diferentes
*/

// console.log(n1,n2,n3)

// console.log(n1 != "10")
// console.log(n1 !== "10")

/** Op. lógicos **/

/*
    Para uma pessoa viajar para o exterior:
    -   precisa ser maior de 18 anos 
    OU
    Acompanhado com os pais
    E 
    ter comprado o bilhete
*/

let idade = 20  
let paisPresentes = false
let bilhete = true

const podeViajar = ( idade >= 18 || paisPresentes ) && bilhete
console.log(`Pode viajar: ${podeViajar}`)


// let n1 = 0
// let n2 = 8
// let media = (n1 + n2) / 2
// console.log(`media: ${media}`)

// if(n1 === 0 || n2 === 0){
//     console.log("Reprovado")
// }else if(media < 7){
//     console.log("Repovado. Mas há como recuperar")
// }else{
//     console.log("Aprovado")
// }

let msgMaiorIdade = ""

// if(idade >= 18){
//     msgMaiorIdade = "É maior de idade"
// } else{
//     msgMaiorIdade = "É menor de idade"
// }

msgMaiorIdade = idade >= 18 ? "É maior de 18" : "É menor de 18 anos"

console.log(msgMaiorIdade)

console.log("Saiu do If")