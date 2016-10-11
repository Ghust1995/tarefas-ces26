# Tarefas semanais yano

## Tarefa 1:

Como tarefa 1 foi criado esse repositorio.

## Tarefa 2:

Para a tarefa 2 foi feito o que esta abaixo do comentario:

```javascript
// Tarefa 2: Movimentacao simples do DOM
  var points = parseInt(readCookie("points")) || 0;

  var divPontos = document.getElementById("pontos") || 0;

  function pointsTxt(points) {
      return document.createTextNode("Points: " + points);
  }

  ...
```

No arquivo public/index.html da pasta tarefas234

## Tarefa 3:

Para a tarefa 3 foi feito o arquivo server.js encontrado na pasta tarefas234 e o que esta abaixo do comentario:

```javascript
// Tarefa 3: Post e Get
  var savebutton = document.getElementById("save");
  savebutton.onclick = function() {
    document.getElementById("saveId").value = "Saving...";
    var saveId = 's' + Math.floor(Math.random() * 21349217454);
      var http = new XMLHttpRequest();
      var url = "save";
      var params = JSON.stringify({
        hash: saveId,

  ...
```

## Tarefa 4

Para a tarefa 4 foi feito o que esta abaixo do comentario:

```javascript
// Tarefa 4: Jquery (Character)
  var divChar = document.getElementById("char");

  function SetCharacter(points) {
      var personId = 87 - Math.floor(points / 10);
      // Carregando o JSON da HTTP request da SWAPI
      $("#char").empty();
      $("#char").append("Loading...");
      $.get("https://swapi.co/api/people/" + personId, function(data) {
          $("#char").empty();
          $("#char").append(data.name);
      });
  }  
  ...
```

## Tarefa 5
  A tarefa 5 de fazer uma aplicacao em angular 1 nao foi feita, uma vez que se usou uma outra ferramenta de fim semelhante no desenvolvimento do projeto, o React.

## Tarefas 6 e 7
  O tutorial do Angular 2, foi lido junto com outro aluno (este desenvolveu o tutorial por completo), e foram feitas muitas discussoes entre o uso de Angular 2 ou de React no projeto principal. Alguns dos pontos levantados foi que o React é mais proximo a uma biblioteca, nao forcando o conhecimento de toda a framework para seu uso correto. O overhead do uso do angular nao compensa para projetos pequenos e medios (uma vez que ja se conhece ambos angular e react). No entanto para projetos grandes, o fato de ser forcada uma arquitetura pode trazer muitos beneficios para o uso do angular. O Angular 2 está sendo usado no nosso projeto na pagina que leva aos jogos. 
