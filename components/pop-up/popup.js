"use strict"

const shoes = document.querySelector('.shoe');

shoes.addEventListener('click', renderPopup);

function renderPopup() {

    const popup = document.createElement("div");
    popup.innerHTML = `
    <div id="popup">
      <div id="popupContent">
      </div>
    </div>
    `;
    document.body.appendChild(popup);
}