"use strict"
const SHOES = [
    { "id": 2, "name": "Black Nick", "price": 709, "kind_id": 3, "country_id": 3, "file_name": "black_nick_sneakers.jpg" },
    { "id": 3, "name": "Blue Kids", "price": 349, "kind_id": 1, "country_id": 6, "file_name": "blue_kids_tofflor.jpg" },
    { "id": 4, "name": "White Fluffy", "price": 329, "kind_id": 1, "country_id": 3, "file_name": "white_fluffy_tofflor.jpg" },
    { "id": 5, "name": "White Leather", "price": 209, "kind_id": 2, "country_id": 7, "file_name": "white_leather_boots.jpg" },
    { "id": 6, "name": "Peaky Blinders", "price": 479, "kind_id": 2, "country_id": 8, "file_name": "peaky_blinders_boots.jpg" },
    { "id": 7, "name": "Beige Chelsea", "price": 899, "kind_id": 2, "country_id": 1, "file_name": "beige_chelsea_boots.jpg" },
    { "id": 8, "name": "Black Chelsea", "price": 489, "kind_id": 2, "country_id": 4, "file_name": "black_chelsea_boots.jpg" },
];

/*
function hilda_filter(shoe_array, x, y) {
    let new_array = [];

    for (let shoe of shoe_array) {
        if (shoe.price >= x && shoe.price <= y) {
            new_array.push(shoe);
        }
    }
    return new_array;
};

console.log(hilda_filer(SHOES, 500, 1000));
*/


function hilda_filer(shoe_array, x, y) {
    let ny_array = [];

    for (let i = 0; i < shoe_array.length; i++) {
        if (shoe_array[i].price >= x && shoe_array[i].price <= y) {
            ny_array.push(shoe_array[i]);
        }
    }
    return ny_array;
}
console.log(hilda_filer(SHOES, 500, 1000));
