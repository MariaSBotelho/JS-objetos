//Percorrer um objeto e extrair informações básicas do cliente em um 
//formato mais legível e de forma automatizada para fornecer a outros 
//departamentos do banco

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

let relatorio = "";

//for in
for(let info in cliente){ //para cada info é uma informação do cliente
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){ //array interpretado como objeto pelo javascript
        continue; //ignora se for objeto ou função
    } else{
    relatorio += `
    ${info} ==> ${cliente[info]}`; //exibe a chave e o valor da chave do objeto
    }
}
console.log(relatorio);
