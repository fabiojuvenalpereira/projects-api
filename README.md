# API PROJECTS
Este é um projeto back end realizado para fornecer uma API REST para um portfólio pessoal. 

## TABELA DE CONTEÚDOS
<!--ts-->
  * [Detalhes do Projeto](#detalhes-do-projeto)
	  * [Case](#case)
	  * [Requisitos Técnicos](#requisitos-técnicos-ou-stacks-utilizadas)
	  * [Funcionalidades](#funcionalidades)
	  * [Estrutura](#estrutura)
		  * [Camadas](#camadas)
		  * [Pastas](#pastas)
	  * [Desenvolvimento](#desenvolvimento)
		  * [Como Foi Feito](#como-foi-feito)
 		  * [Próximos Passos](#próximos-passos)
  * [Softwares Utilizados](#softwares-e-ferramentas-utilizadas)
  * [Referências](#referências)
  * [Sobre Mim](#sobre-mim)
<!--te-->

## DETALHES DO PROJETO

### CASE
Elaborar uma API REST para fornecer dados sobre projetos já realizados para um front end que exibirá as informações recebidas em um modelo de portfólio.

### REQUISITOS TÉCNICOS OU STACKS UTILIZADAS
- Node com TypesCript
- Express
- Banco de dados NoSQL (MongoDb)
- Arquitetura MSC (Model - Service - Controller)
- Conceitos de Clean Code

### FUNCIONALIDADES
O projeto conta com um CRUD *(create - read - update - delete)* básico, onde é possível:
* Inserir um novo projeto no banco de dados;
* Ler um projeto individualmente, ou todos os projetos no banco de dados;
* Atualizar um projeto específico no banco de dados.
* Deletar um projeto específico no banco de dados.

### ESTRUTURA

#### Camadas

###### MODELS 
Esta é a camada responsável por se comunicar com o banco de dados, nela, é possível encontrar um arquivo chamado *connection* que possuí um método de mesmo nome que é responsável por realizar a conexão com o banco de dados. Além disso, é possível encontrar também um arquivo responsável por lidar com a comunicação direta com o banco de dados em questão, realizando as querys necessárias para alterar o que está sendo persistido no banco de dados.
###### SERVICES
Esta camada é responsável por lidar com todas as regras de negócios da aplicação, ou seja, toda a lógica para verificações, formatações e outras funcionalidades lógicas partem desta camada.

###### CONTROLLERS 
Esta é a camada responsável por lidar diretamente com requisições feitas pelo cliente, é nesta camada que realizamos também as respostas da API, ou seja, ela recebe os parâmetros passados pelo cliente e retorna para ele a resposta da API, esta resposta sempre possuirá um status referente a solicitação e um conteúdo de resposta do tipo JSON.

####  Pastas
* **src**  - Esta é a pasta principal da aplicação, nesta pasta poderão ser encontradas todas as subpastas que arquitetam a estrutura do projeto. Dentre elas estão:
* **api** - Possui os arquivos e métodos responsáveis por instanciar o servidor Express. 
* **auth** - Possui arquivos e métodos responsáveis por validar e verificar o acesso à API.
* **Controllers** - Possui arquivos e métodos responsáveis por realizar a comunicação com "usuários finais".
* **interfaces** - Possui as interfaces responsáveis por validar os tipos de entradas de dados para objetos específicos.
* **middlewares** - Possui os middlewares necessários para validação e milddleware de erro, responsável por não deixar vazar erros do servidor que para o cliente.
* **pathManager** - Possui pastas e métodos responsáveis por gerenciar imports e exports de todas as camadas
 para evitar aglomeração de conteúdo nos arquivos pricipais, todos os imports entre camadas é realizado por este gerenciador.
*  **routes** - Possui os arquivos necessários para gerenciamento de rotas da aplicação.
*  **utils** - Possui os arquivos de utilidade para vários métodos em diferentes pastas.

### DESENVOLVIMENTO
#### COMO FOI FEITO
Iniciei o desenvolvimento estudando o que considerei mais complexo de realizar, que neste caso seria o painel de sete segmentos, tendo em vista que não poderia ser utilizado bibliotecas de terceiros e fontes específicas. pensei em várias formas de realizar este modelo, realizei alguns rascunhos, e parti para o desenvolvimento.


#### PRÓXIMOS PASSOS
Pretendo futuramente implementar um sistema de login para tornar o gerenciamento desta API mais seguro. Além disso, pretendo melhorar também a parte de arquitetura e código limpo, visando tornar o código mais legível e performático.


### CONCLUSÃO
Foi um desenvolvimento de API muito divertido, repleto de desafios e muito estudo, tentei ao máximo usar meus conhecimentos atuais para ter um código de leitura facilitada e autoexplicativo, sei que ainda tenho muito a evoluir, porém, acredito que futuramente e com ainda mais estudos poderei chegar a um resultado verdadeiramente satisfatório no quesito qualidade de código e performance.

## SOFTWARES E FERRAMENTAS UTILIZADAS

- [Visual Code Studio](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. [1.64.2]

- [Npm](https://www.npmjs.com/) - É um gerenciador de pacotes para o Node.JS npm, Inc. é uma subsidiária do GitHub, que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git. npm é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js

- [Node.js]((https://nodejs.org/)) - Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. [14 ou superior].

## REFERÊNCIAS

#### Os links abaixo contém alguns sites e fóruns, que serviram de referência para a elaboração do desafio.
- [Trybe](https://www.betrybe.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Mozila ](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Fórum Stack Overflow](https://stackoverflow.com/)
- [w3schools](https://www.w3schools.com/jsref/default.asp)
- [electronics-tutorials](https://www.electronics-tutorials.ws/blog/7-segment-display-tutorial.html)

## Sobre Mim
[Linkedin](https://www.linkedin.com/in/fabiojuvenalpereira/)
[GitHub](https://github.com/fabiojuvenalpereira)
fabiojuvenalpereira@gmail.com
