<p align="center">
  <img src="https://i.ibb.co/vLqdDZb/logo-sigtiba.jpg" alt="logo-sigtiba" border="0">
</p>

<h3 align="center">
  🗺 SIGTIBA: Sistema de Informações Geográficas de Curitiba
</h3>

<br>

<p align="center">
 <a href="#-descrição-e-objetivo">Descrição e Objetivo</a> •
 <a href="#-ferramentas-utilizadas">Ferramentas Utilizadas</a> • 
 <a href="#-instalações-e-configurações-necessárias">Instalações e Configurações Necessárias</a> • 
  <a href="#-como-executar-o-projeto">Como Executar o Projeto</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> • 
 <a href="#-desenvolvedores">Desenvolvedores</a>
</p>

## 📋 Descrição e Objetivo

  A plataforma SIGTIBA reúne informações geográficas da cidade de Curitiba espacializadas em um webmapa, trazendo resumos didáticos sobre o processo de urbanização da cidade, zoneamento vigente, legislação ambiental e planejamento urbano. O objetivo do projeto é que através da integração entre a leitura dos textos e a espacialização no mapa, o usuário equipe-se de um conhecimento maior sobre tais temáticas urbanas, as quais são fundamentais no processo de formação de um cidadão.

## 🛠 Ferramentas Utilizadas
````QGIS 3.14````
````qgis2web plugin 3.16.0````
````Leaflet 1.7.1````
````JavaScript, CSS 3 e HTML 5````
````Bootstrap 5.0````
````SO: Windows 10````
````Node.js 14.16.0````
````MongoDB Community 4.4.4````

## 💻 Instalações e Configurações Necessárias

Caso esteja interessado em executar o projeto com o maior aproveitamento possível, verificar o código-fonte ou até mesmo otimizá-lo, aqui vai um tutorial do que é necessário ser feito para preparar o ambiente de desenvolvimento. 

### Navegador WEB
> Para a interpretação do HTML, CSS e JS em conjunto é necessário um navegador o qual exibirá nosso projeto. Nesse sentido, faça o download da aplicação de sua escolha, recomendamos o uso do [Google Chrome](https://www.google.com/chrome/).

### Visual Studio Code
> Como editor de código-fonte, foi utilizado o VSCode, uma poderosa ferramenta com inúmeras funções as quais auxiliam desenvolvedores. Para fazer o download do mesmo acesse [VSCode Download](https://code.visualstudio.com/Download), selecione seu sistema operacional e prossiga a instalação da maneira que já vem previamente recomendada. 

### Leaflet e Bootstrap
> Ambos os frameworks já têm seus arquivos alocados na pasta de nosso projeto, não sendo necesário o download ou instalação dos mesmos. Entretanto, caso seja do interesse, o link para o sie oficial de ambos com o download e a documentação é [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/) e [Leaflet](https://leafletjs.com/index.html).

### Node.js
> Para auxiliar no desenvolvimento do back-end foi utilizado o Node.js, um interpretador de JavaScript que não depende do navegador. Para instalá-lo, acesse [Node.js](https://nodejs.org/en/) e selecione a versão LTS corresponde ao seu sistema operacional. Durante o processo de instalação prossiga da maneira que já vem previamente recomendada.

### MongoDB
> O banco de dados usado no desenvolvimento foi o MongoDB, portanto é fundamental instalá-lo para rodar o projeto por completo. Para baixá-lo acesse [MongoDB](https://www.mongodb.com/try/download/community) e baixe a versão Community Server. Durante o processo de instalação prossiga da maneira que já vem previamente recomendada.

### QGIS
> Caso esteja interessado em trabalhar com a parte do geoprocessamento de nosso projeto, será necessário baixar o QGIS, um sistema de informações geográficas, para abrir os arquivos correspondentes ao mapa e editá-los, se for desejável. Para baixar a ferramenta acesse [QGIS download](https://qgis.org/pt_BR/site/forusers/download.html), selecione seu sistema operacional, vá até Repositório de Lançamento de Longa Duração e então baixe a versão Standalone correspondente a sua máquina. Durante o processo de instalação prossiga da maneira que já vem previamente recomendada.

### QGIS2WEB
> Dentro do QGIS, foi utilizado um plug-in o qual auxilia na transformação do mapa (.qgz) em um código-fonte legível por navegadores web. Caso deseje testar tal ferramenta ou incrementar funcionalidades no projeto, siga os seguintes passos:
> 1. Clique em complementos (Barra superior do aplicativo)
> 2. Clique em gerenciar e instalar complementos
> 3. Na barra de busca insira "qgis2web"
> 4. Clique em instalar complemento
> 5. Após instalar, clique em web (Barra superior do aplicativo)
> 6. Selecione qgis2web e comece a explorar o plug-in

## 🎬 Como Executar o Projeto

  ### Iniciando o Servidor do Node.js
  > Após instalar pelo menos o Node.JS e o MongoDB você estará apto para seguir os próximos passos. Para iniciar o servidor do Node.js integrado ao banco de dados é necessário abrir o prompt de comando de seu sistema operacional, ir até o diretório em que se encontra o projeto, e executar o comando "npm start". Caso ocorra algum erro significa que será necessário instalar os pacotes do item abaixo.

  #### Alguns Pacotes que Deverão ser Instalados
  
   Para auxiliar no desenvolvimento foram instalados alguns pacotes. No diretório do seu projeto, execute os respectivos comandos que instalam tais pacotes para estar apto a desenvolver. Clique no nome de cada um deles para ser direcionado a uma página de tutorial básico para a instalação.
  
  > 1. [Nodemon](https://www.npmjs.com/package/nodemon)
  > 2. [Multer](https://www.npmjs.com/package/multer)
  > 3. [Body-Parser](https://www.npmjs.com/package/body-parser)
  > 4. [Express](https://www.npmjs.com/package/express)
  > 5. [Multer Gridfs Storage](https://www.npmjs.com/package/multer-gridfs-storage)
  > 6. [Cookie-Parser](https://www.npmjs.com/package/cookie-parser)

  ### Executando a Aplicação
  > Finalmente, para executar o projeto, após realizar todos os passos acima, você deve acessar o localhost padrão do Node.js em sua máquina (normalmente http://localhost:3000/), e então a aplicação será aberta em uma aba de seu navegador.
  
## 🧠 Funcionalidades 

  Para uma introdução as funcionalidades do projeto e ao funcionamento básico do mesmo, baixe o nosso [quick start guide](https://github.com/PedroChoinski/SIGTIBA/blob/main/documentacao/Quick%20Start%20Guide/QUICK%20START%20GUIDE%20SIGTIBA.doc).

## 👨🏼‍🎓 Desenvolvedores 
<p align="center">
 <a href="https://github.com/andrefumaneri">André Fumaneri</a> •
 <a href="https://github.com/TilTelles">Matheus Telles</a> •
 <a href="https://github.com/pedrochoinski">Pedro Choinski</a> 
</p>

