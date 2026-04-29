const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

//remover aliado e status
//delete remove do objeto a chave o valor da propriedade
//operador delete é um booleano retorna true or false
//não remove propriedades herdadas de outro objeto
delete objPersonagem.aliado //apos: undefined
delete objPersonagem["status"] //apos: undefined
console.log(objPersonagem)
