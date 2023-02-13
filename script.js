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
  imprimir();
}

function getNumbers() {
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Entra el numero ${i + 1}`));
    if (isNaN(numero)) {
      alert("Entra un numero valido");
    } else {
      numeros[i] = numero;
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
}

function positiveNegative(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
      numerosNegativos++;
    } else {
      numerosPositivos++;
    }
  }
}

function imprimir() {
  document.querySelector(".result").innerHTML =
    document.querySelector(".result").innerHTML +
    ` Hay ${numerosNegativos} numeros negativos y ${numerosPositivos} numeros positivos`;

  document.querySelector(".result-pares").innerHTML =
    document.querySelector(".result-pares").innerHTML +
    ` Hay ${numeroDeImpares} numeros impares y ${numeroDePares} pares`;
}
