# Acesse o demo
http://wellington.kinghost.net/github-api-demo

# github-api-demo
Projeto básico com Angular 1.6 consumindo alguns recursos da API do github. 

# O que esse projeto faz:

- Autenticação através do serviço Auth0;
- Pesquisa por username no Github;
- Lista usuários e seus respositórios;
- Anotações com local storage.

# Versão do node
Foi testado usando a versão 6.10.2

# Instale o karma globalmente caso você não tenha ainda:
npm install -g karma-cli

O Karma é pra ajudar a gente nos testes unitários.

# Instale o gulp globalmente caso você não tenha ainda:
npm install -g gulp

# Após instalar os itens acima, digite:
npm install

Esse comando vai instalar todas as dependências listadas no package.json do projeto.

# Rodando o projeto
Digite gulp e aguarde, o seu browser será aberto automaticamente no endereço http://localhost:3000

# O que foi usado no projeto:
- Browser sync para ajudar no desenvolvimento local;
- Gulp para automatizar; 
- Sass para organizar o css;
- Auth0 para fazer autenticação;
- Conceito de componentes do angular;
- Karma + Jasmine para execução de testes.

# Executando os testes

- Ao subir o projeto ou toda vez que algum arquivo for alterado, os testes são executados;
- Você pode rodar só a task de teste se quiser através do comando gulp tests.
