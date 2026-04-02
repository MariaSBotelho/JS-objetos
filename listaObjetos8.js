//Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente

const cliente = {
    nome: "maria",
    idade: 20,
    cpf:"12312312399",
    email:"maria@gmail.com" ,
    fones: ["912341234","973580996"], //array dentro de um objeto, caso a chave possua mais de um valor
    dependentes: [
        {
        nome: "Joao",
        parentesco: "irmão",
        dataNascimento: "06/04/2003"
        }
    ]
};
cliente.dependentes.push({ //add novo dependente
    nome: "Malu",
    parentesco: "irmã",
    dataNascimento: "07/04/2020"
});

console.log(cliente);

//filtra o objeto cliente na chave dependentes para que puxe apenas o dependente que tenha nascido na data 07/04/2020
// retorna um novo array apenas com a resposta nome: "Malu" , parentesco: "irmã", dataNascimento: "07/04/2020"
//casula[0]-> malu(unico item do novo array criado) .nome retorna apenas o nome dentro de dependente.
const casula =  cliente.dependentes.filter(function (dependente){
    return dependente.dataNascimento ==="07/04/2020";
});

console.log(casula[0].nome); //filter retorna um novo array