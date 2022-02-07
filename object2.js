// Como Iterar objects

const pessoa = {
    nome: "Maria",
    idade: 23,
   "e-mail": "algum.emailvalido@gmail.com"
}
console.log(pessoa)

for(let prop in pessoa){  // Iteração por meio do For.. In
    console.log(prop)    // Nome da Propriedade que vai chamar as propriedades dentro do object "pessoa"
    console.log(pessoa[prop]) // Como iterar o valor das propriedades dentro do object "pessoa"
}