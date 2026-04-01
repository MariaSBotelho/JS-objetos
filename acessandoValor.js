//acessar um objeto com informaçoes de um cliente e exibir essas informaçoes no console.

 //para acessar o valor de uma chave deve ser atraves de ponto

 const cliente = {
    nome: "Maria",
    idade: 20,
    cpf:"12312312399k",
    email:"Maria@gmail.com"
 }
//visualizando o valor das chaves
 console.log(cliente.nome);
 console.log(cliente.idade);
 console.log(Number(cliente.cpf)); //aceita apenas numeros se não retorna NaN
 console.log(cliente.email.toLowerCase()); //email deve ser minusculo

 console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
 console.log(`Os três primeiros numeros do meu cpf são: ${cliente.cpf.substring(0,3)}`)
