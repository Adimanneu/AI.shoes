"use strict";

function priceFilter(arrayOfShoes, minPrice, maxPrice) {
    // Skapar en ny array där skorna som uppfyller villkoren kommer att hamna
    let filteredArray = [];
    // Loopar igenom alla skor
    for (let shoe of arrayOfShoes) {
        // Men lägger endast till dem som uppfyller kraven
        // Alltså, om skornas pris (från .price-nyckeln i database.js)
        // är större än minsta priset men fortfarande mindre än maxpriset
        if (shoe.price >= minPrice && shoe.price <= maxPrice) {
            // Dessa lägger vi till i vår nya, tomma array vi skapade
            filteredArray.push(shoe);
        }
    }
    // Och returnerar värdet, vår nya array
    return filteredArray;
}
