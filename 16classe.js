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

const andre = new Cliente ("Andre", "andre@gmail.com", "09818845699", 100);

andre.exibirSaldo();
console.log(andre);


