//Criar um array com numeros randomicos não repetidos

function generateRandomInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []

let i = 0 
    while(arr.length < 20){
        i++
        
        let randomNumber = generateRandomInteger(20)
        console.log(randomNumber)

        if(arr.indexOf(randomNumber) < 0){
            arr.push(randomNumber)
        }else{
            console.log(randomNumber, " já existe no array")
        }
    }

console.log(arr)
console.log(`O loop foi executado ${i} vezes`)