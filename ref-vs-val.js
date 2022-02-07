function alteraArray(a){
    a.push("adicionado")
}

let arr = ["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)

function alteraPrimitivo(p){ //mensagem
    p += "adicionado"
    console.log(" Dentro da função: ", p) 
}
let msg =  "mensagem"
console.log(msg)
alteraPrimitivo(msg) // Ref ao p dentro da função, porém oq aparece é o valor dentro do msg e não dentro da função(p    )
console.log(msg)