# On11-TodasEmTech-s18-ProjetoLivre-AnaCarolina-SilvaNappo

Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 18: Desenvolver uma API que realize um CRUD com um tema livre

## Contrato
<img src="https://i.ibb.co/RN3MNvL/Welcome-Back-to-Sandy-Spring-1.png" alt="Apresentação" width="200">

Acesse a apresentação para conferir as informações de forma visual: 
https://www.canva.com/design/DAEjPIZJNaU/HKhH84iKZeY062d3tUazNQ/view?utm_content=DAEjPIZJNaU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton


## Processos
 - Criar repositório no GitHub
 -Criar documentação (requisitos e regras de negócios) 
 - Desenvolvimento (codar)
 - Realização de testes no Insomnia e verificar se os dados estão persistindo na base de dados
 - Subir no GitHub
 - Subir no servidor 
 - Apresentação 11/07/2021 (3 minutos para apresentação - terror e pânico)

<br>
<br>

```
## Sobre o Projeto

A **DOAR!** é um sistema de cadastro para conectar pessoas que querem fazer uma doação de alimentos e pontos de coleta em diversos locais na cidade de Brasília-DF. 

Receberemos cadastros de estabelecimentos referenciando cada categoria de atuação (academias, farmácias e hotéis). Mesmo que o MongoDB seja não relacional, usei utilizando os conhecimentos adquiridos no curso para demonstrar essa possibilidade dentro de um BD NoSQL.  
```

## Tecnologias usadas:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript para backend|
| `express` | Framework NodeJS para construção de APIs rest |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
|`Insomnia ` | Interface gráfica para realizar os testes|
| `MongoDb` | Banco de dado não relacional orientado a documentos|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
| `MongoDb Atlas`| Banco de dados como serviço - na nuvem |
|`Github` | Ferramenta de versionamento de código|
|`Heroku` |  plataforma nuvem que faz deploy de várias aplicações back-end |

<br>
<br>

### CRUD (rotas / endpoints)
 (acrônimo do inglês Create, Read, Update and Delete) são as quatro operações básicas (criação, consulta, atualização e deleção de dados)

CREATE

POST criar categoria relacionada e o perfil com dados do estabelecimento 
- [x] post("/", controller.createShop) - Deverá criar um estabelecimento
- [x] post("/", controller.createCategory) - Deverá criar uma categoria para ser relacionada aos estabelecimentos

READ 
- [x] get ("/", controller.getAllShops) - Deverá retornar todos os estabelecimentos cadastrados
- [x] get("/:id", controller.getShopBySuburb) - - Deverá retornar todos os estabelecimentos de um bairro específico definido pela pessoa usuária

- [x] get("/drugstore", controller.showDrugstore) - Deverá retornar todos os estabelecimentos cadastrados na categoria Farmácia
- [x] get("/gym", controller.showGym) - Deverá retornar todos os estabelecimentos cadastrados na categoria Academia
- [x] get("/hotel", controller.showHotel) - Deverá retornar todos os estabelecimentos cadastrados na categoria Hotel

- [x] get("/", controller.getAllCategories) - Deverá retornar todas as categorias cadastradas


UPDATE
- [x] put("/:id", controller.updateShop) - Deverá alterar informação específica dentro de um estabelecimento por id específico e retorna o estabelecimento alterado

DELETE
- [x] delete("/:id", controller.deleteShop) -  Deverá deletar estabelecimento por id específico e retorna mensagem de confirmação

<br>
<br>

### Dados para Collection shop

- id: autogerada e obrigatória
- nomeFantasia: texto e obrigatório
- endereço: texto e obrigatório 
- bairro: texto e obrigatório
- horarioFuncionamento: texto e obrigatório
- email: obrigatório formato aceita caracteres específicos
- categoria: referência da categoria cadastrada previamente obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>
<br>

### Dados para Collection category

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

<br>
<br>

## 📁 Arquitetura 

```
 📁 Doar
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 categoryController.js
   |         |- 📄 shopController.js
   |
   |    |- 📁 models
   |         |- 📄 category.js
   |         |- 📄 shop.js
   |
   |    |- 📁 routes
   |         |- 📄 categoriesRoutes.js 
   |         |- 📄 shopsRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js

```
<br>
<br>

## Ana Carolina Silva Nappo
- [linkedin](https://www.linkedin.com/in/aanacarolina/)
- [github](https://github.com/aanacarolina)
```
