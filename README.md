# Desafio: Api E-Natal

Uma API Restful que cadastra livros, inscreve em uma lista de espera e com envio automático de e-mail.
## Stack utilizada
**Back-end server:** NESTJS
**Data-base:** Mongo


## Rodando localmente
Instale as dependências

```bash
  npm install
```
Rodar local em modo desenvolvedor
```bash
  npm run start:dev  
```
## Variáveis de Ambiente

O projeto disponibiliza um **Dockerfile** para execução em container, com variáveis de ambiente no seu .env apontando para *production* no deploy

## Schemas
### Book
```javascript
import { Schema } from 'mongoose'
export const BookSchema = new Schema({
    id: String,
    name: String,
    autor: String,
})
```
### Waitlist
```javascript
import { Schema } from 'mongoose'
export const WaitlistSchema = new Schema({
    name: String,
    email: String,
    booksId: [String]
})
```

## Rotas
### Book
#### Get
##### /books
Esta rota recupera todos os livros cadastrados
#### Post
##### /books
Esta rota adiciona um novo livro.
**Request body:**
```javascript
{
	"name":"Senhor dos Anéis",
	"autor":"JRKT"
}
```
### Waitlist
#### Post
##### /waitlist
esta rota relaciona o id do livro com um email, e cria o objeto lista de espera.
**Request body:**
```javascript
{
	"name": "Pamela Vieira Mendes",
	"email": "pampam@mail.com",
	"booksId": ["658f27ae489733d333615ef4","6594a3fc6aa311812d4ec419","6594a4106aa311812d4ec41b"]
}
```
### SendMail
#### Post
##### /sendmail
esta rota envia para o e-mail do request body os titulos dos livros cadastrados na Waitlist do email.
```javascript
{
  "email":"pampam@mail.com"
}
```


## Proposta de melhorias

- validação de email regex
- resgatar ultima Waitlist cadastrada para um email existente
- importar arquivo livro pdf
- disponibilizar rotas em Swagger
