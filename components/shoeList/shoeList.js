"use strict";

function renderShoeList(parent, shoes) {
    const container = document.createElement("div");
    container.id = "shoeList";
    parent.append(container);

    /* Feedback-klassen ifall vi inte får upp resultat på några skor
    <ol>-taggen för att skriva ut alla skor */
    container.innerHTML = `
    <p class="feedback"></p>
    <ol></ol>
  `;

    updateShoeList(shoes);
}

function updateShoeList(shoes) {
    const container = document.querySelector("#shoeList");
    const listDom = container.querySelector("ol");
    const feedbackDom = container.querySelector(".feedback");

    /* Filtrerar skorna, ska finnas i logic > filter.js */
    // const shoes = filterShoes();

    if (shoes === undefined) {
        feedbackDom.textContent = "Select filters to see shoes.";
    }
    else if (shoes.length === 0) {
        feedbackDom.textContent = "No shoes found with your filters selected.";
    }
    else {
        // Finns resultat vill vi inte att feedback ska synas
        feedbackDom.style.display = "none";
        for (let shoe of shoes) {
            renderShoes(listDom, shoe);
        }
    }
}