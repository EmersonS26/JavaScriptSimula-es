//ESSE SE CHAMA FACTORY
function Carro(nome,marca,ano){//função com uma lista orientada a objetos,tema carro
    let car = {
        nomeCarro : nome,
        marcaCarro : marca,
        anoCarro : ano,
        motor:()=>{//função dentro de uma função que dá o comando de exibir: "Carro Moderno",ao invés de usar: function motor(){ ou motor:function(){,eu simplifiquei com uma arrow function(=>) esse sinal é o function,ou seja FUNCTION É = =>
            console.log("Carro Moderno")

        }
            
    }
    return car //retorna o valor de carro(nome,marca,ano)
}
const modelo = Carro("X7-EXTREME","BMW",2024)//criação da variavel que irá exibir o valor dentro da função,puxado pelo return
console.log(modelo)//exibe a função completa


//ESSE SE CHAMA CONSTRUCTOR
function carro(nome,mas,simples){//esse faz a mesma coisa do primeiro,entretante é mais rápido,prático e simples(mas não tão bem organizando e visual quanto o primeiro)
    this.nome = nome;
    this.simples = simples;
    this.mas = mas;
}
const a = new carro("carro","mercedez",2023)//criação da variavel que irá armazenar os valores a serem exibidos dentro da função
console.log(a)//exibe a função completa
