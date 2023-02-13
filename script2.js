// Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
// 	1º Almacenar todos los números en un array
// 2º Almacenar en otro array los números comprendidos entre el 1 y 250
// 3º Almacenar en otro array los números comprendidos entre el 251 y 500

function imprimir(numeros, array1a250, array251a50) {
  console.log(array1a250);
  console.log(array251a50);
  document.querySelector(".array1").innerHTML =
    document.querySelector(".array1").innerHTML + numeros;

  document.querySelector(".array2").innerHTML =
    document.querySelector(".array2").innerHTML + array1a250;
  document.querySelector(".array3").innerHTML =
    document.querySelector(".array3").innerHTML + array251a50;
}

function sort(numeros) {
  let array1a250 = [];
  let array251a50 = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 251) {
      array1a250[i] = numeros[i];
    } else {
      array251a50[i] = numeros[i];
    }
  }
  imprimir(numeros, array1a250, array251a50);
}

function getNumbers() {
  let numerosArray = [];
  for (let i = 0; i < 10; i++) {
    let numero = parseFloat(
      prompt(`Entra un numero entre 1 y 500 (numero ${i + 1})`)
    );
    if (numero > 0 && numero < 501) {
      numerosArray[i] = numero;
    } else {
      alert("Entra un numero valido");
    }
  }
  sort(numerosArray);
}
