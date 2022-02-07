const nomes = ["", "", ""]
const pessoa = {nome: "", idade: 2, email: ""}
const pessoa1 = {}

const pessoas = [ {
        nome: "Aaa",
        idade: 111,
    }, {
        nome: "Bbb",
        idade: 123,
    }, {
        nome: "Ccc",
        idade: 132
    }, {
        nome: "Ddd",
        idade: 321
    }]

//Como mostrar o nome e idade de cada pessoa dentro de cada obj 
for(let i = 0; i < pessoas.length; i++){
    console.log(`A pessoa: ${pessoas[i].nome}, tem ${pessoas[i].idade} anos`)   
}
