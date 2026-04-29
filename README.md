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

* Base dos objetos em JavaScript
* Permite **herança**
* Armazena métodos compartilhados

```js id="k8f3yu"
arr.__proto__
```

📌 Evita duplicação de métodos em vários objetos

---

## ✅ Resumo

* Objetos → armazenam dados com chave/valor
* JSON → formato para troca de dados
* Arrays → listas indexadas
* Métodos facilitam manipulação
* Prototype → base da herança no JS

---
