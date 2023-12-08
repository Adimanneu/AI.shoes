"use strict";
function renderShoes(parent, shoe) {
    const container = document.createElement("div");
    container.classList.add("shoe");
    container.id = shoe.id;
    parent.append(container);

    // const shoe = array_find(SHOES, function (x) { return x.id === shoe.universityID; });
    const countryOfProduction = arrayFind(COUNTRIES, function (x) { return x.id === shoe.country_id; });
    const kindOfShoe = arrayFind(KINDS, function (x) { return x.id === shoe.kind_id; });

    const imagePath = shoe.file_name;

    container.innerHTML = `
      <div>
        <img src="media/skobilder/${imagePath}" alt="Shoes">
        <h1>${shoe.name.toUpperCase()}</h1>
        <div class="price">${shoe.price} KR</div>
        <div class="kindOfShoe">${kindOfShoe.name.toUpperCase()}</div>
        <div class="countryOfProduction">MADE IN ${countryOfProduction.name.toUpperCase()}</div >
      </div >
    `;
}