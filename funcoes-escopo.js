let n = "global"

function mostraN(){
    //Todas as váriaveis criadas aqui dentro só seram executadas aqui dentro
    let n1 = "n1 local"
    
    if(true){
        var n2 = "n2 Dentro de if com var"
        // let n1 = "n1 Dentro de if com let"
    }
    console.log(n2)
    console.log("Valor de n2: " + n2)
    console.log("Valor de n1: " + n1)
}
mostraN()

console.log("Valor de n(Global): " + n)

function fnExt(){
//  função global

    let n = "n local na função fnExterna"

    function fnInt(){
        // função de Bloco

        let n = "n local na função fnInt"
        console.log(n)
    }

    fnInt()

    console.log(n)
}

fnExt()