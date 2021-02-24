<p align="center">
  <img src="https://i.ibb.co/vLqdDZb/logo-sigtiba.jpg" alt="logo-sigtiba" border="0">
</p>

<h3 align="center">
  SIGTIBA: Sistema de Informações Geográficas de Curitiba
</h3>

<br>

<p align="center">
 <a href="#-descrição-e-objetivo">Descrição e Objetivo</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-configurando-o-ambiente-de-desenvolvimento">Configurando Ambiente de Desenvolvimento</a> • 
  <a href="#-executando-aplicação">Executando aplicação</a> • 
 <a href="#-autores-">Autores</a>
</p>

## 🎯 Descrição e Objetivo
O aplicativo visa a disponibilidade de um ambiente de escrita customizável, com a possibilidade de introduzir mídia e compartilhar diários com outras pessoas, tanto para visualização quanto para escrita em conjunto. Diante disso, pode-se usufruir os benefícios da autorreflexão, do pensamento e da prática de escrita a partir do dispositivo mais essencial do mundo contemporâneo, assim, possibilitando uma melhora na qualidade de vida.

## 💻 Tecnologias
````react-native: 0.63.4````
````react: 16.13.1````
````Javascript/ES6````
````Java 8````
````NodeJS 12 LTS````
````OS: Windows 10````
````Android 10````

## ⚙ Configurando o ambiente de desenvolvimento

Siga estas instruções se precisar construir código nativo em seu projeto. Para uma documentação mais atualizada, acesse a [documentação oficial](https://reactnative.dev/docs/environment-setup).

### NPM
> Primeiro de tudo, faça o download e a instalação da versão LTS do NodeJS [aqui](https://nodejs.org/en/download/), de acordo com sua máquina.

### JDK
> O React Native também requer o Java SE Development Kit (JDK). Se você já tem um JDK em seu sistema, certifique-se de que é a versão 8 ou mais recente. Se não, acesse [openjdk](https://openjdk.java.net/projects/jdk8/) e faça sua instalação.

### Yarn
> O Yarn é um gerenciador de pacotes. Seu uso facilita o controle e gerenciamento do seu código. Para instalá-lo, siga as instruções no [site oficial](https://classic.yarnpkg.com/en/docs/install#windows-stable).

### Android Studio

> [Baixe e instale o Android Studio aqui](https://developer.android.com/studio)(recomendado) ou faça o download do instalador disponível na pasta Softwares do nosso drive. Na etapa do assistente de instalação do Android Studio, certifique-se de que as caixas ao lado de todos os itens a seguir estejam marcadas:

- ````Android SDK````
- ````Android SDK Platform````
- ````Android Virtual Device````

> Em seguida, clique em "Avançar" para instalar todos esses componentes.

### Android SDK

O Android Studio instala o SDK do Android mais recente por padrão. Construir um aplicativo React Native com código nativo, entretanto, requer a SDK ````Android 10 (Q)```` em particular. SDKs Android adicionais podem ser instalados por meio do SDK Manager no Android Studio.

Para fazer isso, abra o Android Studio, clique no botão "Configurar" e selecione "SDK Manager".

![Android studio menu](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeWindows-b88d46e9a7fe5e050224a9a295148222.png)

Selecione a guia "SDK Platforms" no SDK Manager e marque a caixa ao lado de "Show Package Details" no canto inferior direito. Procure e expanda a opção ````Android 10 (Q)```` e certifique-se de que os seguintes itens estejam marcados:

- ````Android SDK Platform 29````
- ````Intel x86 Atom_64 System Image```` ou ````Google APIs Intel x86 Atom System Image````

Em seguida, selecione a opção "Ferramentas do SDK" e marque a caixa ao lado de "Mostrar detalhes do pacote" também. Procure e expanda a opção "Android SDK Build-Tools" e verifique se a versão 29.0.2 está selecionada.

Finalmente, clique em "Aplicar" para baixar e instalar o Android SDK e as ferramentas de build relacionadas.

### Variáveis de ambiente

As ferramentas React Native requerem que algumas variáveis ​​de ambiente sejam configuradas para construir aplicativos com código nativo.

**Adicionando a variável ANDROID_HOME**:

1. Abra o **Painel de Controle do Windows**.
2. Clique em **Contas de usuário** e, em seguida , clique em **Contas de usuário** novamente
3. Clique em **Alterar minhas variáveis ​​de ambiente**
3. Clique em **Nov**o para criar uma nova variável **ANDROID_HOME** de usuário que observe o caminho para o seu Android SDK. Você pode encontrar a localização real do SDK na caixa de diálogo "Configurações" do Android Studio, em **Aparência e comportamento** → **Configurações do sistema** → **Android SDK**.

![Painel menu](https://www.automationtestinghub.com/images/android/set-android-home-environment-variable.png)

**Adicionando o platform-tools ao PATH**:

1. Abra o **Painel de Controle do Windows**.
2. Clique em **Contas de usuário** e, em seguida , clique em **Contas de usuário** novamente
3. Clique em **Alterar minhas variáveis ​​de ambiente**
4. Selecione a variável **Path** .
5. Clique em **Editar**.
6. Clique em **Novo** e adicione o caminho para o platform-tools à lista.

![Painel menu](https://b3nac.com/images/Environvar.JPG)

## ▶ Executando aplicação

### Preparando o dispositivo Android
Para executar o aplicativo, é necessário obter um emulador em sua máquina ou usar seu próprio dispositivo móvel. De qualquer forma, você precisará preparar um dispositivo para executar aplicativos Android para desenvolvimento.

- Dispositivo Físico (recomendado): você poderá executar o aplicativo num dispositivo físico, conectando-o pelo cabo USB. Saiba mais [aqui](https://reactnative.dev/docs/running-on-device)

- Dispositivo Virtual: você pode emular um dispositivo na sua máquina. Há várias opções de emuladores, dentre eles, o próprio Android Studio. Siga [esses passos](https://developer.android.com/studio/run/managing-avds.html) para configurar e executar o aplicativo por ele.

### Rodar projeto

Faça a instalação do editor de código (sugerido: [Visual Studio Code](https://code.visualstudio.com/), disponível na nossa pasta de Softwares do Drive). Após a instalação, abra-o e instale as seguintes extenções:

````Prettier - Code formatter````
````ESlint````
````EditorConfig for VS Code````
````Babel JavaScript````

Após clonar este repositório ou obter o código fonte do Drive, abra-o no VSCode e no terminal do próprio editor (ctrl + shift + '), rode os seguintes comandos:

```javascript
# Instalar dependências
yarn

# Iniciar Metro Bundler
npx react-native start

# Iniciar aplicativo
npx react-native run-android
```

## 👨‍💻 Autores 👩‍💻
<p align="center">
 <a href="https://github.com/andrefumaneri">André Fumaneri</a> •
 <a href="https://github.com/TilTelles">Matheus Telles</a> •
 <a href="https://github.com/pedrochoinski">Pedro Choinski</a> 
</p>

