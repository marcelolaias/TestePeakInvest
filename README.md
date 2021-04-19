<h1>Jogo The Hangman (Backend)</h1> 

> Status do Projeto: :heavy_check_mark: :warning: (concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Regras do Jogo](#regras-do-jogo)

:small_blue_diamond: [Linguagens e libs utilizadas](#linguagens-e-libs-utilizadas)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Playground GraphQL](#playground-graphql)

... 


## Descrição do projeto 

<p align="justify">
  APIs do jogo da forca escrito em NodeJS com a linguagem de consulta GraphQL.
</p>

## Regras do Jogo

:heavy_check_mark: O jogo é individual.

:heavy_check_mark: Peça ao usuário que selecione uma letra do alfabeto.

:heavy_check_mark: Se a letra estiver contida na palavra, o usuário terá outra chance, adivinhando a letra. 

:heavy_check_mark: Para revelar uma carta clique na letra na área do alfabeto que fará com que a letra seja revelada se estiver contida na palavra.

:heavy_check_mark: Se a letra está contida ou não na palavra retirada do alfabeto.

:heavy_check_mark: Se a letra não estiver contida na palavra então uma parte do carrasco será adicionada.

:heavy_check_mark: O jogo continua até que a palavra é adivinhada e todas as letras são reveladas e exibida a mensagem 'WINNER' ou todas as partes do carrasco são 
exibidas 'LOSER'.

:heavy_check_mark: O usuário tem 100 segundos para escolher uma letra e o cronômetro é reiniciado a cada escolha. Caso esgote o tempo o jogo termina.

:heavy_check_mark: Após 6 tentativas inválidas o jogo termina.



## Linguagens e libs utilizadas :books:

- [NodeJS](https://nodejs.org/pt-br/): versão 14.16.0
- [GraphQL](https://graphql.org/): versão 14.2.1
- [Apollo GraphQL](https://www.apollographql.com/): versão 14.2.1



## Como rodar a aplicação :arrow_forward:

No terminal clone o projeto do backend em um diretório, em seguida instale os módulos e execute: 

```
mkdir thehangman-backend
cd thehangman-backend
git clone https://github.com/marcelolaias/thehangman-backend.git
npm i
npm start
```

O backend do jogo em GraphQL estará disponível no seguinte endereço:
> http://localhost:4000/

## Playground GraphQL

Para criar um template do jogo, execute a seguinte intrução:

```
mutation {
  newGame {
    id
    date
    errors
    finished
    step
    screen
    submittedLetters
    word {
      tip
      word
    }
  }
}
```

Este é a resposta ao comando 'newGame':

```
{
  "data": {
    "newGame": {
      "id": 0,
      "date": "10/04/2021",
      "errors": 0,
      "finished": false,
      "step": "game",
      "screen": "game",
      "submittedLetters": "",
      "word": {
        "tip": "Utensilhos de Cozinha",
        "word": "Forno"
      }
    }
  }
}
```

A propriedade 'data.newGame.word' sempre retornará uma palavra e dica aleatórias, para salvar este jogo execute o comando a seguir informando a palavra que veio em resposta ao comando anterior no atributo 'data.newGame.word.word':

```
mutation {
  saveGame(
    id: 1
    word: "Forno"
    errors: 3
  ) {
    id
    date
    errors
    finished
    step screen submittedLetters word {
      tip
      word
    }
  }
}
```

Esta é a resposta ao comando 'saveGame':

```
{
  "data": {
    "saveGame": {
      "id": 1,
      "date": "10/04/2021",
      "errors": 3,
      "finished": false,
      "step": "game",
      "screen": "game",
      "submittedLetters": "",
      "word": {
        "tip": "Utensilhos de Cozinha",
        "word": "Forno"
      }
    }
  }
}
```

Para submeter uma letra para a 'forca', execute o seguinte comando:

```
mutation {
  submitLetter(id: 1, word: "Forno" letter: "A") {
    id
    date
    errors
    finished
    step
    screen
    submittedLetters
    word {
      tip
      word
    }
  }
}
```

Esta é a resposta ao comando 'submitLetter':

```
{
  "data": {
    "submitLetter": {
      "id": 1,
      "date": "10/04/2021",
      "errors": 1,
      "finished": false,
      "step": "game",
      "screen": "game",
      "submittedLetters": "A",
      "word": {
        "tip": "Utensilhos de Cozinha",
        "word": "Forno"
      }
    }
  }
}
```

Para consultar todos os jogos salvos, execute o seguinte comando:

```
query {
  lastMoves {
    id
    date
    errors
    finished
    step
    screen
    submittedLetters
    word {
      tip
      word
    }
  }
}
```

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: 2021 - The Hangman