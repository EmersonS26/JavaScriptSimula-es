let bolo = "sashimi";
let a = "tofu";
let c = "tangerina";

switch(bolo,a,c){// usado para colocar o valor que o case vai se basear
    case "tangerina"://case vai procurar o valor baseado através do nome do valor e se for correto,executará o código
        console.log("Bolo interessante!!")//exibir código
        //para a execução pra não executar um valor que não queremos

    case "tofu":
        console.log("NUNCA COMI MAS DEVE SER BOM.")
        
    
    case "sashimi":
        console.log("É UMA MARAVILHA MAS NÃO SERÁ POSSIVEL AQUI")
        break

    default://caso não tenha o valor que queremos irá executar o default que é como se fosse o ELSE e dará uma resposta padrão abaixo
        console.log("como assim irmão")
}