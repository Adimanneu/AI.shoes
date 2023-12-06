"use strict"

function david_filter(arrayOfShoes, x, y) {
    let filteredArray = [];

    for (let shoe of arrayOfShoes) {
        if (shoe.price >= x && shoe.price <= y) {
            filteredArray.push(shoe);
        }
    }

    return filteredArray;
}