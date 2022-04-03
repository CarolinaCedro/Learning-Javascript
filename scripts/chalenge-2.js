/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

// const { type } = require("os")

// const { type } = require("os")

// var isTruthy = function(parametro){
//   if(parametro === '' || parametro <= 0 || parametro === undefined || parametro === null || parametro === NaN || parametro === ""){
//     return false
//   }else{
//     return true
//   }}
  

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

// isTruthy(NaN)
// isTruthy(undefined)
// isTruthy(null)
// isTruthy(-0)
// isTruthy(0)
// isTruthy(false)
// isTruthy('')
// isTruthy("")


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

// isTruthy('NaN')
// isTruthy(1)
// isTruthy(2)
// isTruthy(7)
// isTruthy([])
// isTruthy({})
// isTruthy('dsfsd')
// isTruthy(87)
// isTruthy(1.00)
// isTruthy(1)


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
  marca: 'hillux',
  modelo: 'camionete',
  placa: 'JUH2626',
  ano: 2022,
  cor: 'Vermelho',
  quantasPortas:4,
  assentos:0,
  quantidadePessoas:0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
  carro.cor = cor
}


carro.obterCor = function(){
  return carro.cor
}


carro.obterModelo = function(){
  return carro.modelo
}

carro.marca = function(){
  const teste = carro.marca = 'saveiro'
  const teste2 = 'teste 2'
  return [teste,teste2];
}


carro.obterMarca = function(){
  return carro.marca
}


carro.obterMarcaModelo = function(){
  return `Esse carro é um ${carro.marca} ${carro.modelo}`
}


carro.addPeoples = function(pessoas){
  carro.assentos = pessoas
  var quantidade = (pessoas - carro.assentos);
  if(carro.assentos >= pessoas){ 
    return 'O carro já está lotado!'
  }else {
    return `Só cabem mais ${quantidade} pessoas`
  }
 
}


// Crie uma variável qualquer, que receba um array com alguns valores aleatórios
// - ao menos 5 - (fica por sua conta os valores do array).

var linguagensProgramação = ['Java','C','Javascript','Python','PHP'];


// Crie uma função que receba um array como parâmetro, e retorne esse array.
function myFunction (numbers=[1,2,3,4,5]){
  return numbers;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
// console.log(myFunction()[1])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/


function functionParams(arr,indice){
  return arr[indice]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// var typeValues = [1,'value',false,[1,2,3,4,5],{nome: 'Ana'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// console.log(functionParams(typeValues,0));
// console.log(functionParams(typeValues,1));
// console.log(functionParams(typeValues,2));
// console.log(functionParams(typeValues,3));
// console.log(functionParams(typeValues,4));



/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (nameBook){
  var allBooks = {
    "Livro 1":{
      quantidadePaginas: 220,
      autor: 'Ana',
      editora: 'Editora tech'
    } ,
    
    "Livro 2":{
      quantidadePaginas: 170,
      autor: 'Marcos',
      editora: 'EdiNova'
    },

    "Livro 3":{
      quantidadePaginas: 50,
      autor: 'belo',
      editora: 'Editora avell'
    }
  }

  return !nameBook ? allBooks : allBooks[ nameBook ]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O  Livro 1 tem ${book('Livro 1').quantidadePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O  Livro 1 autor ${book('Livro 1').autor}!`)


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O  Livro 1  editora ${book('Livro 1').editora} !`)


