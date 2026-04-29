//Adiconar informaçoes que faltam, como telefone e também seus valores

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com"
}
cliente.telefone = "31973580996" //adicionando chave e valor com ponto
console.log(cliente);


//alterando valor do telefone
cliente.telefone = "123"
console.log(cliente);


//visualizando valores 
const chaves = ["email", "cpf","idade","nome", "telefone"];

chaves.forEach(function(indice){
    console.log(cliente[indice])
})


