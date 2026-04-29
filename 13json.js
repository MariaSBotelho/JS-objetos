//JSON é um formato criado para transferência de dados
//necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa.

//JSON.parse(): converte JSON para um objeto JavaScript;
//JSON.stringify(): converte um objeto JavaScript para o formato JSON.

const jsonLivro = JSON.stringify({ // converte um objeto JavaScript para o formato JSON.
 id: 50,
 titulo: "Primeiros Passos com NodeJS",
 autor: "João Rubens",
 categoria: "programação",
 versoes: ["ebook", "impresso"]
})

console.log(jsonLivro)

const objLivro = JSON.parse(jsonLivro) //converte JSON para um objeto JavaScript;
console.log(objLivro)