// se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
// 	1º Cuantos son positivos
//  2º Cuantos son negativos
//  3º Cuantos son pares
let numeros = [];
let numeroDeImpares = 0;
let numeroDePares = 0;
let numerosNegativos = 0;
let numerosPositivos = 0;

function ejecutar() {
  getNumbers();
  parImpar(numeros);
  positiveNegative(numeros);
}

function getNumbers() {
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Entra el numero ${i + 1}`));
    if (numero != isNaN) {
      numeros[i] = numero;
    } else {
      alert("Entra un numero valido");
    }
  }
}

function parImpar(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      numeroDePares++;
    } else {
      numeroDeImpares++;
    }
  }
  alert(
    `There are ${numeroDeImpares} odd numbers and ${numeroDePares} even numbers`
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

// Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// 	1º Almacenar todos los números en un array
// 2º Almacenar en otro array los números comprendidos entre el 1 y 250
// 3º Almacenar en otro array los números comprendidos entre el 251 y 500
