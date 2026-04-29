//Gerar uma função que permita a criação de novos clientes a partir de um modelo
//Para criar quantos clientes quiser com as mesmas proprieadades


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
console.log(andre);
//objeto andre foi construido a partir da função cliente

console.log()