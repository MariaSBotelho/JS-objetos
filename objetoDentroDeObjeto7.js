//adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com" ,
    fones: ["912341234","973580996"] //array dentro de um objeto, caso a chave possua mais de um valor
};

cliente.dependente = {
    nome: "Malu",
    parentesco: "irmã",
    dataNascimento: "07/04/2020"
}; //objeto dentro de objeto

console.log(cliente);

//alteração no objeto do objeto

cliente.dependente.nome = "Maria Luiza";
console.log(cliente);