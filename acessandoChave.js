//Consultar um objetos utilizando um lista de chavaes relativa a informaçoes de clientes 
//gerada pelo sistema e printar o resultado na tela

//para acessar uma chave deve ser atraves de colchetes
const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com"
 }

 const chaves = ["nome","idade","cpf","email"];

 console.log(cliente[chaves[0]]) //nome
 console.log(cliente[chaves[1]]) //idade

 //imprimir todos os valores
 
 chaves.forEach(function (info){
    console.log(cliente[info]);
 });

 console.log(cliente["nome"]); // maria

 /*
info = "nome"
info = "idade"
info = "cpf"
info = "email"

cliente[info] → cliente["nome"] → "Andre"
*/