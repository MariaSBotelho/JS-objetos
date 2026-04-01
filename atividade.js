const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

//add seguro social e cpf como string, aparecer somente os 4 primeiros digitos do cpf e identidade quando impresso

pessoa.seguroSocial = "23243242"; //add campos
pessoa.cpf = "12312312399"; //add campos

const info = ["nome","dataNascimento","carteiraIdentidade","email","telefone","cidade","estado","seguroSocial","cpf"]


console.log(`informações de Bruce:`);
info.forEach(function(indice) {
    if(indice === "cpf" || indice === "carteiraIdentidade"){
        console.log(pessoa[indice].substring(0,4));
    } else{
    console.log(pessoa[indice]);
    }
});