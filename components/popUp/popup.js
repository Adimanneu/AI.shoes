"use strict"

document.addEventListener('DOMContentLoaded', function () {

  function renderPopup(shoe) {
    const imagePath = shoe.file_name;

    const countryOfProduction = COUNTRIES.find(function (x) { return x.id === shoe.country_id; });
    const kindOfShoe = KINDS.find(function (x) { return x.id === shoe.kind_id; });

    const popup = document.createElement("div");
    popup.innerHTML = `
      <div id="popup">
        <div class="popupContainer">
          <div id="closeButton">X</div>
          <div class="content">
            <img src="media/skobilder/${imagePath}" alt="Shoes">
            <div>
              <h1>${shoe.name.toUpperCase()}</h1>
              <div class="price">${shoe.price} KR</div>
              <div class="productdetails">
                <div class="kindOfShoe">${kindOfShoe.name.toUpperCase()}</div>
                <div class="countryOfProduction">MADE IN ${countryOfProduction.name.toUpperCase()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(popup);

    const closeButton = popup.querySelector('#closeButton');
    closeButton.addEventListener('click', function() {
      popup.remove();
    });
  }

  function addClickEventToShoes() {
    const shoeElements = document.querySelectorAll('.shoe');

    shoeElements.forEach(function(shoeElement) {
      shoeElement.addEventListener('click', function() {
        const shoeId = shoeElement.id;
        const selectedShoe = SHOES.find(shoe => shoe.id === parseInt(shoeId, 10));

        if (selectedShoe) {
          renderPopup(selectedShoe);
        }
      });
    });
  }

  addClickEventToShoes();

});