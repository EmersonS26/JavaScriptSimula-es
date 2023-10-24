function Carro(nome,marca,ano){
    let car = {
        nomeCarro : nome,
        marcaCarro : marca,
        anoCarro : ano,
        motor:()=>{
            console.log("massa")

        }
            
    }
    return car
}
const modelo = Carro("X7-EXTREME","BMW",2024)
console.log(modelo)


function carro(nome,mas,simples){
    this.nome = nome;
    this.simples = simples;
    this.mas = mas;
}
const a = new carro("carro","mercedez",2023)
console.log(a)