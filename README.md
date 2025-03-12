# Calculadora de Faltas 2025 UnB

Este é um aplicativo desktop desenvolvido com **Electron** e configurado com **Electron Forge**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) (vem com o Node.js)

## Instalação

Copie e cole os comandos fornecidos em cada um dos passos a seguir no terminal:

1. Clone o repositório:

   ```bash
   git clone LINK AQUI
   cd faltas25

2. Instale as dependências:

    ```bash
    npm install

3. Inicie o aplicativo:

    ```bash
    npm start

## Desenvolvimento
### Estrutura do Projeto
```main.js```: Ponto de entrada do aplicativo Electron. Define a janela principal e carrega o conteúdo.

```index.html```: Arquivo HTML principal que será carregado na janela do aplicativo.

```package.json```: Contém as configurações do projeto, scripts e dependências.

```forge.config.js```: Configurações do Electron Forge para empacotamento e criação de instaladores.

### Comandos Disponíveis

No diretório do projeto, você pode executar os seguintes comandos no terminal:

```npm start```: Inicia o aplicativo em modo de desenvolvimento.

```npm run package```: Empacota o aplicativo em um formato pronto para distribuição (sem instaladores).

#### Formatos Suportados
- Windows: .exe (usando Squirrel) e .zip.
- macOS: .dmg e .zip.
- Linux: .deb, .rpm e .zip.

```npm run make```: Cria instaladores para Windows, macOS e Linux.
