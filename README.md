# API de Gerenciamento de Pedidos – Desafio Técnico Jitterbit

## 📌 Descrição

Este projeto consiste em uma **API REST desenvolvida em Node.js** para gerenciamento de pedidos.

A API permite realizar operações de **CRUD (Create, Read, Update, Delete)** de pedidos, armazenando os dados em **MongoDB** e realizando **transformação (mapping) de dados** antes de persistir no banco.

Este projeto foi desenvolvido como parte do **Desafio Técnico da Jitterbit**.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* Body-parser
* Cors
* Nodemon (dev)

---

# 📂 Estrutura do projeto

```
desafio_jitterbit
│
├── controllers
│   └── orderController.js
│
├── models
│   └── Order.js
│
├── routes
│   └── orderRoutes.js
│
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Instalação do projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/desafio_jitterbit.git
```

### 2️⃣ Acessar a pasta

```
cd desafio_jitterbit
```

### 3️⃣ Instalar dependências

```
npm install
```

---

# 🗄️ Configuração do banco de dados

Certifique-se de ter o **MongoDB rodando localmente**.

String de conexão utilizada:

```
mongodb://localhost:27017/jitterbit
```

server.js
```

---

# ▶️ Executar o projeto

Rodar com Node:

```
node server.js
```

ou em modo desenvolvimento:

```
npx nodemon server.js
```

Servidor iniciará em:

```
http://localhost:3000
```

---

# 📡 Endpoints da API

## Criar pedido

```
POST /order
```

### Exemplo de Request

```json
{
  "numeroPedido": "v10089016vdb",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

---

## Buscar pedido por ID

```
GET /order/:id
```

Exemplo:

```
GET /order/v10089016vdb
```

---

## Listar todos os pedidos

```
GET /order/list
```

---

## Atualizar pedido

```
PUT /order/:id
```

Exemplo:

```
PUT /order/v10089016vdb
```

---

## Deletar pedido

```
DELETE /order/:id
```

Exemplo:

```
DELETE /order/v10089016vdb
```

---

# 📊 Status HTTP utilizados

| Operação              | Status |
| --------------------- | ------ |
| Criar pedido          | 201    |
| Buscar pedido         | 200    |
| Pedido não encontrado | 404    |
| Erro interno          | 500    |

---

# 🧪 Testando a API

A API pode ser testada utilizando:

* Postman
* cURL

Exemplo usando **cURL**:

```
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
"numeroPedido": "v10089016vdb",
"valorTotal": 10000,
"dataCriacao": "2023-07-19T12:24:11.529Z",
"items":[
{
"idItem":"2434",
"quantidadeItem":1,
"valorItem":1000
}
]
}'
```

---

# ⚠️ Tratamento de erros

A API possui tratamento de erros para:

* pedido não encontrado
* erro de conexão com banco
* erros de processamento

Retornando mensagens claras para o cliente.

---

# 👨‍💻 Autor

Eric Cezar de Souza Tabalipa

LinkedIn:
https://www.linkedin.com/in/eric-t-940b50b6/

---

# 📌 Observações

Este projeto foi desenvolvido para fins de **avaliação técnica**, seguindo os requisitos propostos no desafio da Jitterbit.

