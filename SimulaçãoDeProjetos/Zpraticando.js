let nome1 = "camila";
let nome2 = "carlos";
let idadeC = 23;
let idadeCA = 25;

if(idadeC >= idadeCA){
    console.log("camila é mais velha");
}
else if(idadeCA >= idadeC){
    console.log("camila é mais nova doque carlos")
}
else{
    console.log("ambos são iguais,ambos marcam!")
}
//OPÇÃO 1
switch(nome1){
    case "camila":
        console.log(`${nome1} tem ${idadeC} Anos de idade!!`)
        break

    default:
        console.log("ela não tem essa idade")
        break


}
//OPÇÃO 2
switch(nome2){
    case "carlos":
        console.log(`${nome2} tem ${idadeCA} Anos de idade`)
        break

    default:
        console.log("carlos não tem essa idade")
        break
}

let listaescola = [//ARRAYLIST
 
    ["maria","jonas","MELISSA"],//classe 1
    ["ANA","sergio","rodolfo"],//classe 2
    ["mateus","ronaldo","bruno"]//classe 3
]

listaescola.push(["jorge","murilo","fernanda"])//classe 4 adicionada

console.log(`A ALUNA ${listaescola[0][2]} NÃO ESTÁ FREQUENTANDO AS AULAS NA CLASSE 1, E A ${listaescola[1][0]} ESTÁ FREQUENTANDO RAZOAVELMENTE`)
