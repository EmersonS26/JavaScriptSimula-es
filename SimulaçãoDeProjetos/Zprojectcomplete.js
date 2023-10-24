let casa = [
    ["porta","quarto"],
    ["banheiro,cozinha"],
    ["sala","varanda"]    
]
casa[1].unshift("azulejo")
casa[2].push("Área de Serviço")

if(casa == "azulejo"){
    console.log("existe esse item aqui")
}
else if(casa == "banheiro"){
    console.log("existe banheiro aqui detro")
}
else if(casa == "Área de Serviço"){
    console.log("A casa tá ficando completa")
}
else
{
    console.log(casa)
}


