"use strict"

document.addEventListener('DOMContentLoaded', function () {

  const filterButton = document.createElement('button');
  filterButton.textContent = 'FILTER';
  filterButton.classList.add('filter-button');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('filter-container');
  buttonContainer.appendChild(filterButton);

  const header = document.querySelector('nav');
  if (header) {
    header.parentNode.insertBefore(buttonContainer, header.nextSibling);
  }

  const filterPopup = document.createElement('div');
  filterPopup.classList.add('filter-popup');

  filterPopup.innerHTML = `
      <div class="filter-content">
        <span class="close-button">x</span>
        <h1>FILTER</h1>
        <div class="filter-content-types">
          <div>
            <h3> Types of Shoes</h3>
            <input type="checkbox" id="bootsCheckbox" class="input-box" name="Boots">
            <label for="Boots">BOOTS</label>
            <input type="checkbox" id="sneakersCheckbox" class="input-box" name="Sneakers">
            <label for="Sneakers">SNEAKERS</label>
            <input type="checkbox" id="slippersCheckbox" class="input-box" name="Slippers">
            <label for="Slippers">SLIPPERS</label>
          </div>
          <div>
            <h3> Max price </h3>
            <p> Up to: <input type="text" class="input-price"> KR </p>
          </div>
          <div>
            <h3> Made In</h3>

            <input type="checkbox" id="swedenCheckbox" class="input-box" name="Sweden">
            <label for="Sweden">SWEDEN</label> 
            <input type="checkbox" id="spainCheckbox" class="input-box" name="Spain">
            <label for="Spain">SPAIN</label>
            <input type="checkbox" id="germanyCheckbox" class="input-box" name="Germany">
            <label for="Germany">GERMANY</label>
            <input type="checkbox" id="usaCheckbox" class="input-box" name="USA">
            <label for="USA">USA</label>
            <input type="checkbox" id="ukCheckbox" class="input-box" name="UK">
            <label for="UK">UNITED KINGDOM</label>
            <input type="checkbox" id="franceCheckbox" class="input-box" name="France">
            <label for="France">FRANCE</label>
            <input type="checkbox" id="italyCheckbox" class="input-box" name="Italy">
            <label for="Italy">ITALY</label>
            <input type="checkbox" id="japanCheckbox" class="input-box" name="Japan">
            <label for="Japan">JAPAN</label>

          </div>
          </div>
        `;

  document.body.appendChild(filterPopup);

  filterButton.addEventListener('click', function () {
    filterPopup.style.display = 'block';
  });

  const closeButton = filterPopup.querySelector('.close-button');
  closeButton.addEventListener('click', function () {
    filterPopup.style.display = 'none';
  });

  const maxPriceInput = filterPopup.querySelector('.input-price');

  maxPriceInput.addEventListener("input", function () {
    const maxPrice = parseFloat(maxPriceInput.value);

    if (!isNaN(maxPrice)) {
      const maxPriceInput = document.querySelector(".input-price");

      maxPriceInput.addEventListener("input", updateShoeListHandler);

      function updateShoeListHandler() {
        const maxPrice = parseFloat(maxPriceInput.value);

        if (!isNaN(maxPrice)) {
          const filteredShoes = array_filter(SHOES, function (shoe) {
            return shoe.price <= maxPrice;
          });
          updateShoeList(filteredShoes);
        } else {
          updateShoeList(SHOES);
        }
      }
      console.log("Max Price:", maxPrice);
    }
  });

});