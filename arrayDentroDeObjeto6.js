//Acessar a lista de números de telefone das pessoas cadastradas no sistema
//e imprimi-la, verificando se há mais de um números em algum cadastro

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com" ,
    fones: ["912341234","973580996"] //array dentro de um objeto, caso a chave possua mais de um valor
}

cliente.fones.forEach(function(fone){
    console.log(fone)
})

