/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];

  let cardSuits = ["♦", "♣", "♠", "♥"];

  // Randomly select a card value
  let cardValue = cardValues[Math.floor(Math.random() * cardValues.length)];

  // Randomly select a card suit
  let cardSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];

  // Get the card element
  let cardElement = document.querySelector(".card");

  // Update the card element's HTML to display the card value and suit
  cardElement.innerHTML = `
    <span class="card-suit top-left">${cardSuit}</span>
    <span class="card-value">${cardValue}</span>
    <span class="card-suit bottom-right">${cardSuit}</span>
  `;
};
