/*
Crie um array com 5 items (tipos variados).
*/
var arr = [
  'Carolina',
  [1, 2, 3],
  { name: 'Carolina', age: 27 },
  105,
  false,
  ['Ana', true, 27],
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arr.push(item);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(arr[5]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[5].length} itens`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
// console.log('Números pares entre 10 e 20:');

var number = 10;
while (number <= 20) {
  if (number % 2 == 0) {
    console.log('Números pares entre 10 e 20:', number);
  }
  number++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
var impares = 10;
while (impares <= 20) {
  if (impares % 2 != 0) {
    console.log('Números impares entre 10 e 20:', impares);
  }
  impares++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
// console.log('Números pares entre 100 e 120:');
let num = 100;
let numImpares = 111;
for(num=100;num<=200;num++){
  if(num % 2 == 0){
    console.log('Números pares entre 100 e 200:', num);
  }
}

for(numImpares=111;numImpares<=125;numImpares++){
  if(numImpares % 2 != 0){
    console.log('Números impares entre 111 e 125:', numImpares);
  }
}


