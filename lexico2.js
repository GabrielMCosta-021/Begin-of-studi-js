let x = 10
x = "string"

console.log(x)

let msg = 'una stringa'
console.log(msg)

console.log("ola" * 2)

function teste(){
    console.log(this)
}

const teste2 =  () => {
    console.log('teste2')
    console.log(this)
}

teste()

const obj = {
    n: 1,
    teste,  // teste: teste (Function)
    teste2
}

obj.teste()