/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Flamengo Champios 2022';
// console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Flamengo', 'Vasco', 'Gremio', 'Fluminense', 'Santos'];

// console.log('Times que estão participando do campeonato:', teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(number) {
  return number > 5
    ? 'Não temos a informação do time que está nessa posição'
    : `O time que está em ${number}º lugar é o ${teams[number]}`;
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(0));
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));

teams.push('Goias');

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var i = 20;
while (i <= 30) {
  console.log(i);
  i++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color) {
  var allCollors = {
    red: {
      hex: '#FF69B4',
    },
    violet: {
      hex: '#EE82EE',
    },
    purple: {
      hex: '#A020F0',
    },
    orange: {
      hex: '#FFA500',
    },
    yellow: {
      hex: '#FFFF00',
    },
  };

  switch (color) {
    case 'red':
      console.log(`O hexadecimal para a cor red é ${allCollors.red.hex}.`);
      break;
    case 'violet':
      console.log(
        `O hexadecimal para a cor violet é ${allCollors.violet.hex}.`,
      );
      break;
    case 'purple':
      console.log(
        `O hexadecimal para a cor purple é ${allCollors.purple.hex}.`,
      );
      break;
    case 'orange':
      console.log(
        `O hexadecimal para a cor orange é ${allCollors.orange.hex}.`,
      );
      break;
    case 'yellow':
      console.log(
        `O hexadecimal para a cor yellow é ${allCollors.yellow.hex}.`,
      );
      break;
    default:
      console.log(`Não temos o equivalente hexadecimal para ${color}`);
  }

  return allCollors;
}
