// QUANDO VC PRECISA DE VÁRIOS VALORES EM MAIS DE UM ARRAY VC CRIA UM OBJECT

// const nomes = ["daaa", "Maraaa", "Jooo"]
// const idades = [40, 28, 35]
// console.log(nomes[0], idades[0])


// EXISTEM DOIS TIPOS DE OBJETOS [FORMAL E LITERAL]
// const pessoa = new Object()
// pessoa.nome = "Daa"
// pessoa.idade = "20"
// let prop = "nome"
// console.log(pessoa[prop])
// console.log(pessoa.idade) // pessoa["idade"] // Se for apenas pessoa[idade] ele procurará uma variável idade

const pessoa = { //Sintaxe literal -- Mais utilizada
    nome: "Alguém",
    idade: 185
}

console.log(pessoa.nome)