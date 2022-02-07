function sum(n1, n2){
    if(typeof n1  !== "number" || typeof n2  !== "number"){
        // return alert("Just Numbers")
        throw Error("Sum accept just numbers")
    }
    return n1 + n2
}

let soma = ""

    try{ // Tomar cuidado com o Try..Catch > Quando executado ele parará todo o código abaixo dele
    
        soma = sum(3, "3")
    
    }catch(e){
    
        alert("Error") 
        console.log(e.message) 
        //Retorna uma propriedade do tipo erro Ou seja a mensagem definida na function
    
    }finally{ // Ação que será executada com ou sem erro

        console.log("Bloco finally")

    }

    console.log(soma)
    console.log("Fim do programa")
