let parque = ["brinquedo1","brinquedo2","brinquedo3"];

parque.shift();//exclui elementos no inicio
parque.pop();//exclui elementos no final
parque.unshift("brinquedo4","brinquedo5");//adiciona elementos no inicio da lista
parque.push("brinquedão","brinquedinho");//adiciona elementos no final
parque.splice(0,1);//a partir de qual elemento começarei a excluir e quantos elementos excluirei

console.log(parque)//execução de código