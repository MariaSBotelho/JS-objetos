//Adicionar uma propriedade que permita açoes, para que os clientes que estão cadastrados consigam fazer operaçoes bancárias

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com" ,
    fones: ["912341234","973580996"], 
    dependentes: [
        {
        nome: "Joao",
        parentesco: "irmão",
        dataNascimento: "06/04/2003"
        },
        {
        nome: "Malu",
        parentesco: "irmã",
        dataNascimento: "07/04/2020"
        }
    ],
    saldo: 100 , 
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    }

};
//ultiza funções para dar comportamento para um objeto
//metodos- funçoes que estão ligadas a um objeto

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
cliente.sacar(90);
console.log(cliente.saldo);
console.log(cliente)


