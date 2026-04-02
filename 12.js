//Extrair de uma listagem de clientes apenas as informações de dependentes 
//e montar uma lista única, para analise de outros departamentos do banco

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com" ,
    fones: ["912341234","973580996"], //array interpretado como objeto pelo javascript
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


