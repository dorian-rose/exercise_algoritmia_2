// Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// 	1º Almacenar todos los números en un array
// 2º Almacenar en otro array los números comprendidos entre el 1 y 250
// 3º Almacenar en otro array los números comprendidos entre el 251 y 500

let numeros = [];
let array1a250 = [];
let array251a500 = [];

function ejecutar2() {
  getNumbers();
  sort(numeros);
}

function getNumbers() {
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(
      prompt(`Entra un numero entre 1 y 500 (numero ${i + 1})`)
    );
    if (numero != isNaN && numero > 0 && numero < 501) {
      numeros[i] = numero;
    } else {
      alert("Entra un numero valido");
    }
  }
}

function sort(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 251) {
      array1a250[i] = numeros[i];
    } else {
      array251a500[i] = numeros[i];
    }
  }
  alert(
    `Therese are the numbers between 1 and 250 (inclusive): ${array1a250}, and these are the numbers between 251 and 500: ${array251a500} `
  );
}

function positiveNegative(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      numerosNegativos++;
    } else {
      numerosPositivos++;
    }
  }
  alert(
    `There are ${numerosNegativos} negative numbers and ${numerosPositivos} positive numbers`
  );
}
