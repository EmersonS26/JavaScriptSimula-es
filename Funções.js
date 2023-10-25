//função simples sem parametros(valores dentro dos parenteses ao lado da função),você cria a função com sintaxe de exibição dentro dela
//e para exibir essa função você chama(digita) ela no lado de fora do escopo {}.
function carro(){
    console.log("carro")
}
carro();

//função com parametros,essas 2 variaveis aqui em baixo,e no final você chama a função
//com o valor do parametro.
function checagem(andamento,concluido){//criação de função com parametros dentro do escopo
    console.log(`chegagem de valores em ${andamento},processo ${concluido}`)//exibição dentro da função
    
    
}
checagem("Processamento","Finalizado")//chamando e dando os valores dos parametros (andamento,concluido) a função para executar ela .
//o valor de andamento,concluido será processamento,finalizado no console.log
//E ao chamar a função ele exibe os valores  que estão dentro do escopo,parametro.
