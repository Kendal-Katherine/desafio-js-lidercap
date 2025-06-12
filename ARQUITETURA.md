
# API - Desafio Lidercap 🚀

Esta é uma API simulada construída com **Node.js** e **Express**, que fornece dados fictícios de usuários, seus posts e comentários. O projeto segue boas práticas de estruturação de pastas, organização de responsabilidades e uso de Promises com `util.promisify()` para facilitar testes e legibilidade.

---

## 📁 Estrutura de Pastas

```
desafio-js-lidercap/
├── src/
│   ├── controllers/         # Funções que tratam as requisições
│   │   └── userController.js
│   ├── routes/              # Definição das rotas
│   │   └── index.js
│   └── services/            # Funções simuladas com dados mockados
│       └── service.js
├── src/__tests__/           # Testes automatizados com Jest e Supertest
│   └── userController.test.js
├── insomnia/                # Pasta com arquivos de testes no Insomnia
│   └── Insomnia_2025-06-12.yaml
├── app.js                   # Configuração da aplicação Express
├── index.js                 # Inicialização do servidor
├── package.json
├── package-lock.json
└── README.md

```

---

## 🧪 Testes com Insomnia

Os endpoints foram testados utilizando o **Insomnia**. A collection utilizada está neste repositório:

📎 [Insomnia_2025-06-12.yaml](./insomnia/Insomnia_2025-06-12.yaml)

💡 Para usar, abra o Insomnia e selecione `Import Data → From File`.

---

## 🧪 Testes automatizados com Jest e Supertest

Para garantir o funcionamento correto das rotas, adicionamos testes automatizados usando **Jest** e **Supertest**.

### Como rodar os testes

1. Instale as dependências de teste (se ainda não tiver):

```bash
npm install --save-dev jest supertest
```

2. Execute os testes com o comando:

```bash
npm test
```

Os testes verificam os endpoints principais simulando o serviço com dados mockados, testando respostas de sucesso e tratamento de erros.

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-seu-repo>
cd sua-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor

```bash
node index.js
```

O servidor ficará disponível em:

```
http://localhost:3000
```

---

## 📌 Endpoints disponíveis

| Método | Rota                            | Descrição                                         |
|--------|--------------------------------|--------------------------------------------------|
| GET    | `/api/users/:userId`            | Retorna os dados de um usuário específico        |
| GET    | `/api/users/:userId/posts`      | Retorna os posts de um usuário                    |
| GET    | `/api/posts/:postId/comments`   | Retorna os comentários de um post                 |
| GET    | `/api/users/:userId/full`       | Retorna os dados completos de um usuário, seus posts e comentários do primeiro post |

---

## 👩‍💻 Tecnologias utilizadas

- Node.js  
- Express  
- Insomnia (para testes manuais)  
- Jest e Supertest (para testes automatizados)  
- `util.promisify` (para converter funções de callback em Promises)  

---

## ✅ Próximos passos sugeridos

- Substituir dados mock por banco de dados real (ex: MongoDB com Mongoose)  
- Implementar autenticação com JWT  
- Criar rotas de login e registro com proteção por token  

---

Feito com 💻 por [Kendal Katherine Correia](#)
