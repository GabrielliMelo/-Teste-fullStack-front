# konv-bank-front

## Sobre o Projeto

    Frontend criado para fazer integracão com a API - back- disponivel em: https://github.com/GabrielliMelo/back - aplicação para listagem e informação de pokemon(s).

# Instruções para rodar a aplicação

- Primeiro: clone o repositorio:

```shell
$ git clone git@github.com:GabrielliMelo/front.git
```

- Segundo: instale as dependencias

```shell
$ yarn
```

Or:

```shell
$ npm install
```

- Para iniciar a execução do aplicativo:

```shell
$ yarn start
```

Or:

```
$ npm start
```

### .env

Nesse arquivo você configura as variaveis de ambiente. Utilize os nomes das keys e coloque os valores referente ao que esta configurado na sua maquina.

| key               | description       | default                                     |
| ----------------- | ----------------- | ------------------------------------------- |
| REACT_APP_URL_API | url deploy heroku | https://back-pokemon-simbiox.herokuapp.com/ |

## Testando

- Se o heroku nao estiver respondendo corretamente utilize a api localmente - https://github.com/GabrielliMelo/back (seguindo passo a passo do Reame.md)- se não utilizar no .env a url do deploy do heroku - https://back-pokemon-simbiox.herokuapp.com/

##

- Tu ok para fazer os testes da funcionalidades.

- A aplicação será iniciada na porta 3000

http://localhost:3000

# Funcionalidades

- Lista paginda com 10 pokemons.
- Filtro de busca de pokemon.

# url deploy

- https://willowy-lebkuchen-cef543.netlify.app/home

## Tecnologias

- ReactJs
- JavaScript
- React-router-dom
- dotenv

## Pontos de melhoria

- Testes automatizados.
- Autenticação.
- Desenvolver em TypeScript.
- filtro não retornar somente quando escreve o nome correto do pokemon.

## extra

- Paginação com 10 itens por página;
- Cards com id, nome, imagem, titulo;
- Tratar os itens sem imagens, utilizando imagem padrão;
- Filtro de busca de pokemon.
- responsividade
- deploy aplicação
- Página de perfil para os personagens

## Desenvolvedora

```js
{
nome: "Gabrielli Melo da silva Borges",
Idade: 23,
Nivel Atual: "Júnior",
Competências: [
	"HTLM", "CSS","JavaScript", "NodeJs",
	"ReactJs", "Java", "Spring Boot",
	"Docker", "AWS", "PostgreSQL",
	"MySQL", "Redis", "API Rest",
	"Scrum", "Kanbam", "Git/GitFlow"
],
Habilidades: [
	"Comunicação", "Empatia", "Trabalho em equipe",
	"Positividade", "Proatividade",
	"Resolução de problemas", "...etc"
],
Linkdln: "https://www.linkedin.com/in/gabriellimeloborges/",
GitHub: "https://github.com/GabrielliMelo/"
}
```
