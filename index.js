const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 5;",
        "variable myVar = 5;",
        "myVar = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove o último elemento do array",
        "Adiciona um elemento ao final do array",
        "Inverte a ordem dos elementos no array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'charAt()' em uma string em JavaScript?",
      respostas: [
        "Retorna o caractere na posição especificada",
        "Remove espaços em branco do início e do fim da string",
        "Converte a string para minúsculas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "func",
        "method",
        "function",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '10 % 3' em JavaScript?",
      respostas: [
        "3",
        "1",
        "0.3",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de acessar o primeiro elemento de um array em JavaScript?",
      respostas: [
        "myArray[0]",
        "myArray.first()",
        "firstElement(myArray)",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //logo ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta 
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    //coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }