// Métodos: Funções atrelados as propriedades

const produto = {
    nome: 'caneta',
    qtd: 10,
    comprar(n){ // Também pode ser exec. com " comprar: function(n){ "
        console.log(this)
        if(n > this.qtd){  // this nesse momento está fazendo uma ref. ao obj produto
            return "quantidade não disponível" //Se o if for exec. a função irá retornar a frase do Return
        }
        this.qtd -= n
    },
    teste1: function(){
        console.log("teste1")
        console.log(this) // O this aqui ref. ao obj. produto
    },
    teste2: () => {
        console.log("teste2")
        console.log(this) // O this aqui cria um obj. window 
    },
}

produto.comprar(3)
// console.log(produto)

produto.comprar(13)
// console.log(produto)

produto.teste1()
produto.teste2()