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
            <label for="Boots"><input id="Boots" class="input-box" type="checkbox">Boots </label>
            <label for="Sneakers"><input id="Sneakers" class="input-box" type="checkbox">Sneakers </label><br>
            <label for="Tofflor"><input id="Tofflor" class="input-box" type="checkbox">Tofflor </label>
          </div>
          <div>
            <h3> Max price </h3>
            <p> Up to: <input type="text" class="input-price"> KR </p>
          </div>
          <div>
            <h3> Made In</h3>
            <label for="Spain"><input id="Spain" class="input-box" type="checkbox">Spain </label>
            <label for="Portugal"><input id="Portugal" class="input-box" type="checkbox"> Portugal </label><br>
            <label for="Kingdom"><input id="Kingdom" class="input-box" type="checkbox">United Kingdom </label><br>
            <label for="Sweden"><input id="Sweden" class="input-box" type="checkbox">Sweden </label>
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
});


