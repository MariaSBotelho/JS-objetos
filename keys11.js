//Percorrer um objeto, verificar se existe a chave `dependentes` e, caso 
//exista, enviar uma mensagem de oferta de seguro

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

for(let info in cliente){ //porem não verifica se os valores cdo ampo esta como null, apenas se existe a chave
    if(info === "dependentes" && cliente.dependentes.length > 0){
        console.log(`${cliente.nome} gostaria de contratar nosso seguro?`);
    }
}


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);//cria um array com todas as cheves do objeto
    if(propsClientes.includes("dependentes")){ //includes retorna true or false
        console.log(`${obj.nome} gostaria de contratar nosso seguro de vida?`);
    }
}

console.log(oferecerSeguro(cliente));
console.log(Object.values(cliente));//cria um array com os valores do objeto
console.log(Object.entries(cliente)); //cria um array para cada chave do objeto