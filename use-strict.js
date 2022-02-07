// use strict deixa o js mais seguro
"use strict"  
// Sempre deixar na primeira linha || Adicionar o "use strict" no começo do código vai criá-lo no scopo global do mesmo jeito que criá-lo em uma função somente a função terá as regras do "use strict"
// x = 10  

// function foo() {
//     x = 20
// }
// foo()
// console.log(x)


// function dobrar(n1, n1){
//     "use strict"
//     console.log(n1, n1)
//     return n1 * n1
// }

// console.log(dobrar(2,3))


// function Teste(){
//     "use strict"  // Bloqueia o this para que não deixe ele criar objeto dentro de funções
//     console.log(this)
//     this.a = "a" // Cria um objeto que retorna uma string "a"
// }

// Teste()


let msg = "qualquer"

msg.count = 0

console.log(msg)