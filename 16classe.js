class Cliente{ //dentro de classe não se usa a palavra function
//class espera metodos , não funçoes
    constructor(nome,email,cpf,saldo){
        this.nome = nome ;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo; 
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}


class Clientepoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }

}

const andre = new Clientepoupanca ("Andre", "andre@gmail.com", "09818845699", 100, 200);

andre.depositar(50);
andre.depositarPoupanca(50);
andre.exibirSaldo();
console.log(andre);


