"use strict"

document.addEventListener('DOMContentLoaded', function () {

  const filterButton = document.createElement('button');
  filterButton.textContent = 'FILTER';
  filterButton.classList.add('filter-button');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('filter-container');
  buttonContainer.appendChild(filterButton);

  const header = document.querySelector('header');
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
            <span><input type="checkbox">Boots </span>
            <span><input type="checkbox">Sneakers </span>
            <span><input type="checkbox">Tofflor </span>
          </div>
          <div>
            <h3> Max price </h3>
            <p> Up to: <input type="number"> KR </p>
          </div>
          <div>
            <h3> Made In</h3>
            <span><input type="checkbox">Spain </span>
            <span><input type="checkbox">Portugal </span>
            <span><input type="checkbox">United Kingdom </span>
            <span><input type="checkbox">Sweden </span>
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


