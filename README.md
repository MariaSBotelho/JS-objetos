# 🧩 Objetos, JSON e Arrays em JavaScript

---

## 🧱 Objetos

Um **objeto literal** é criado usando `{ }`, contendo pares de **chave: valor**.

📌 Usado para armazenar diferentes tipos de informação (ex: nome, idade, email)

```js id="x9a2kf"
const cliente = {
  nome: "Maria",
  idade: 20,
  cpf: "12312312399",
  email: "maria@gmail.com"
};
```

* `cliente` → objeto
* `nome` → chave
* `"Maria"` → valor

---

### 🔎 Manipulação de Objetos

```js id="y2p4jd"
console.log(cliente.nome); // acessar

cliente.nome = "Pedro"; // atualizar ou adicionar

delete cliente.nome; // remover
```

---

## 📦 JSON

**JSON (JavaScript Object Notation)** é um formato de dados:

* Baseado na sintaxe de objetos e arrays
* Muito usado para comunicação entre **cliente e servidor**
* Independente de linguagem

---

### 🔄 Conversão de Dados

```js id="b7k2ls"
JSON.parse()      // JSON → Objeto JS
JSON.stringify() // Objeto JS → JSON
```

📌 Esse processo é chamado de **serialização**

---

## 📚 Arrays

* Armazenam listas de dados
* Acessados por **índice**
* Geralmente usados para dados do mesmo tipo

```js id="lq8zrw"
const nomes = ["Ana", "João", "Carlos"];
```

📌 Em JavaScript, arrays são um tipo de **objeto**

---

## 🛠️ Métodos e Recursos Importantes

### ✂️ substring()

Extrai parte de uma string:

```js id="m3v9kp"
"JavaScript".substring(0, 4); // "Java"
```

---

### 🧬 Object.create()

Cria um novo objeto com base em outro:

```js id="u8z1nt"
const novo = Object.create(cliente);
```

---

### 🎯 this

Refere-se ao **próprio objeto**

---

### 🔁 for...in

Percorre propriedades de um objeto:

```js id="v4q7hx"
for (let chave in cliente) {
  console.log(chave);
}
```

---

### 🔑 Object.keys()

Retorna um array com as chaves:

```js id="c9d2la"
Object.keys(cliente);
```

---

### 📊 Object.values()

Retorna um array com os valores:

```js id="g5m8zs"
Object.values(cliente);
```

---

### 📌 Object.entries()

Retorna pares `[chave, valor]`:

```js id="n1k6px"
Object.entries(cliente);
```

---

## ➕ Operador Spread (`...`)

Espalha elementos de arrays ou propriedades de objetos:

```js id="r2w9qb"
const novoArray = [...nomes];
```

📌 Cria uma **cópia** ou junta dados

---

## 🧬 Prototype

É através da propriedade prototype que podemos manipular o protótipo de um objeto e adicionar propriedades e funções

Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo;
objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora;
Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

* Base dos objetos em JavaScript
* Permite **herança**
* Armazena métodos compartilhados

```js id="k8f3yu"
arr.__proto__
```

📌 Evita duplicação de métodos em vários objetos

---

# 🏗️ Função Construtora (JavaScript)

Uma **função construtora** é um tipo de função usada para criar **vários objetos com a mesma estrutura**.

Ela funciona como um **modelo (molde)**.

---

## 💡 Como funciona

- Você define uma função com propriedades usando `this`
- Usa a palavra-chave `new` para criar novos objetos
- Pode passar **valores diferentes** ao criar cada objeto

---

## 🧪 Exemplo

```js
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("Maria", 25);
const pessoa2 = new Pessoa("João", 30);


---

##Classe
 
Define as propriedades(atributos) e os comportamentos(metodos) dos objetos

---

##Herança
 
Mecanismo que permite que uma classe herde caracteristicas de outra classe
Objeto é a instância de uma classe em memória

class Programador extends Pessoa{ //programador é herança da classe pessoa tudo que tem em pessoa terá em programador
  constructor(nome,sobrenome, cpf, email, linguagem){ // acrescenta propriedade linguagem
    super(nome,sobrenome, cpf, email) //chama as propriedas de Pessoa
    this.linguagem = linguagem //acrescenta nova propriedade
  }
}
---

## ✅ Resumo

* Objetos → armazenam dados com chave/valor
* JSON → formato para troca de dados
* Arrays → listas indexadas
* Métodos facilitam manipulação
* Prototype → base da herança no JS

---
