//Apartir de Cliente criar um novo tipo de cliente para contas popuança.

function Cliente(nome, cpf, email, saldo){ //função construrora
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
    this.sacar = function (valor){
        this.saldo -= valor;
    }
} 

const andre = new Cliente("André","09818845644","andre@gmail.com",100);

function ClientePoupanca(nome,cpf,email,saldo,poupanca){ //adiciona a propriedade para saldo de poupança
    Cliente.call(this,nome,cpf,email,saldo);
    //chama as propriedades de cliente, e pode especificar quais trazer
    this.poupanca = poupanca;
}

const ju = new ClientePoupanca("Julia","09818845622","ju@gmail.com",100,200);

console.log(ju);

ClientePoupanca.prototype.depositarpoupanca = function(valor){ //add função depositar poupanca em prototype e adicionou o novo metodo
    this.poupanca += valor;
}

ju.depositarpoupanca(30);
console.log(ju.poupanca);
console.log(andre.poupanca); //não tem poupanca em cliente apenas em cliente poupanca, andre foi criado em cliente

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)
