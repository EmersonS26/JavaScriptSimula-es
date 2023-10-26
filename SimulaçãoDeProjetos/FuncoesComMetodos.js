//utilizando metodo Split que serve para separar/dividir um texto com base no carectere colocado dentro do escopo do split.

function primeiroNome(nome){
    let first = nome.split("-")[0]//pedi para o split pegar a primeira palavra e tirar o -
    
    return first//retorna o valor acima
}
let nome = primeiroNome("Rodolfo - das - selva!")//criei uma variavel pra executar função
console.log("Bom dia, " + nome)//exibir função com o nome Rodolfo sem o - e o restante da frase,pois pedi apenas para exibir o rodolfo lá em nome.split e no final dele coloco [0]pra ele pegar apenas o rodolfo que está na posição 0 da variavel.
//também serve com espaços e outros carecteres.

function sobreNome(sobre){
    let nome = sobre.split(" ")[1]// nesse exemplo,diferente do primeiro eu pedi pra ele separar o texto baseado nos espaços e pedi pra fazer isso no Roberto lá em baixo que está na posição 1(lembre-se que as posições em programação sempre começam de 0)

    return nome //retorna resultado da variavel nome
}

let lastName = sobreNome("Carlos Roberto Da Silva")
console.log("Eu Me chamo: " + lastName)


function Carro(peca){
    let motor = peca.split("&")//separa/divide por caractere "&"
    return motor[2] //retorna o valor acima na posição 2,troquei mas dá o mesmo resultado

}
let control = Carro("Cilindro & TetoSolar & Bateria")
console.log("Peguei os coponentes pequenos e apliquei na: " + control)