//Extrair de uma listagem de clientes apenas as informações de dependentes 
//e montar uma lista única, para analise de outros departamentos do banco

const clientes = [
    { //cliente 1
    nome: "maria",
    cpf:"12312312399", 
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
        }]
    },
    { //cliente 2
    nome: "Pedro",
    cpf:"12312312388", 
    dependentes: [
        {
        nome: "luciana",
        parentesco: "filha",
        dataNascimento: "21/02/2010"
        }] 
    }
];
//cria um array para os dependentes
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]; //espalha o conteudo dentro do array
console.log(listaDependentes);
console.table(listaDependentes); //exibe no formato de uma tabela as informaçoes


