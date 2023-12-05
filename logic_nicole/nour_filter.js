"use strict"

function nour_filter(shoesArray, x, y) {
    let filteredShoes = [];
    for (let shoe of shoesArray) {
        if (shoe.price >= x && shoe.price <= y) {
            filteredShoes.push(shoe);
        }
    }
    return filteredShoes
}

