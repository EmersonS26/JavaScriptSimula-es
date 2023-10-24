let a = 2 * 5;//multiplica 2x5(10) EX: SEM ESCOPOS
let b = 2 * (5+5);//aqui ele soma 5+5(10)e depois 2x10(20) EX: COM ESCOPO(PARENTESES)
let c = 3 * ((10+10)-10);//aqui ele soma 10+10(20),depois 20-10(10) e por último 3x10(30) esse ficou assim apenas por conta dos 2 parenteses extras
//Os 2 escopos(parenteses) faz com que ele isole o 3* para fazer os calculos primeiro com 10+10-10 e deixa a multiplicação por último.
let d = 3 * (10 + 10) - 10;// aqui ele soma 10+10(20),depois 3x20(60) e por último 60-10(50)

console.log(a);
console.log(b);
console.log(c);
console.log(d);
