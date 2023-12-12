/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pinta = ["♦", "♥", "♠", "♣"];
  let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // funcion que devuelve un elemento aleatorio de un array
  function randomSelection(arr) {
    let selection = arr[Math.floor(Math.random() * arr.length)];
    return selection;
  }
  // funcion que genera una carta aleatoria
  function generateCard() {
    let pintaRandom = randomSelection(pinta); // devuelve una pinta aleatoria
    let numeroRandom = randomSelection(numero); // devuelve un numero aleatorio
    let colorRandom; // variable que guarda el color de la pinta
    // condicional que asigna el color de la pinta
    if (pintaRandom === "♦" || pintaRandom === "♥") {
      colorRandom = "red";
    } else {
      colorRandom = "black";
    }

    document.querySelector("#numero").innerHTML = numeroRandom; // asigna el numero aleatorio a la carta
    document.querySelector("#numero").style.color = colorRandom; // asigna el color aleatorio a la carta

    let pintas = document.querySelectorAll(".pinta"); // selecciona todas las pintas
    for (let pinta of pintas) {
      // recorre todas las pintas
      pinta.innerHTML = pintaRandom; // asigna la pinta aleatoria a todas las pintas
      pinta.style.color = colorRandom; // asigna el color aleatorio a todas las pintas
    }
  }

  generateCard();
  // Generar una nueva carta cada 10 segundos
  setInterval(generateCard, 10000);
  // Generar una nueva carta al hacer click en el boton
  document.querySelector("#button").addEventListener("click", generateCard);
};
