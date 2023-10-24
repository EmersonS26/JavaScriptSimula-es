let j = "ANA";
let idadeAna = 20;
let j2 = "Maria";
let idadeMaria = 23;

if(idadeAna && idadeMaria >= 50 ){//se idade de ana e maria for maior ou igual a 50... elas estão perto dos 60    
    console.log("Estão perto dos 60")
}
else(idadeAna || idadeMaria <= 30) || (!idadeAna && !idadeMaria)//Se não...idade de ana ou idade de maria for menor ou igual a 30 ou idade de ana e maria não é a que elas tem então... Ana e Maria são jovens.
{
    console.log(j + " E " + j2 + " São Jovens!!!")
}