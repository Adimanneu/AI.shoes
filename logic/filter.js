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

function filterShoes() {
    document.addEventListener("DOMContentLoaded", function () {
        const SLIPPERS_TYPE_ID = 1;
        const BOOTS_TYPE_ID = 2;
        const SNEAKERS_TYPE_ID = 3;

        const slippersCheckbox = document.getElementById("slippersCheckbox");
        const bootsCheckbox = document.getElementById("bootsCheckbox");
        const sneakersCheckbox = document.getElementById("sneakersCheckbox");

        const swedenCheckbox = document.getElementById("swedenCheckbox");
        const spainCheckbox = document.getElementById("spainCheckbox");
        const germanyCheckbox = document.getElementById("germanyCheckbox");
        const usaCheckbox = document.getElementById("usaCheckbox");
        const ukCheckbox = document.getElementById("ukCheckbox");
        const franceCheckbox = document.getElementById("franceCheckbox");
        const italyCheckbox = document.getElementById("italyCheckbox");
        const japanCheckbox = document.getElementById("japanCheckbox");


        slippersCheckbox.addEventListener("change", updateShoeListHandler);
        bootsCheckbox.addEventListener("change", updateShoeListHandler);
        sneakersCheckbox.addEventListener("change", updateShoeListHandler);

        swedenCheckbox.addEventListener("change", updateShoeListHandler);
        spainCheckbox.addEventListener("change", updateShoeListHandler);
        germanyCheckbox.addEventListener("change", updateShoeListHandler);
        usaCheckbox.addEventListener("change", updateShoeListHandler);
        ukCheckbox.addEventListener("change", updateShoeListHandler);
        franceCheckbox.addEventListener("change", updateShoeListHandler);
        italyCheckbox.addEventListener("change", updateShoeListHandler);
        japanCheckbox.addEventListener("change", updateShoeListHandler);


        // Funktion för att uppdatera skolistan baserat på valda filter
        function updateShoeListHandler() {
            const checkedCountries = [];
            const checkedKinds = [];

            if (slippersCheckbox.checked) {
                checkedKinds.push(SLIPPERS_TYPE_ID);
            }
            if (bootsCheckbox.checked) {
                checkedKinds.push(BOOTS_TYPE_ID);
            }
            if (sneakersCheckbox.checked) {
                checkedKinds.push(SNEAKERS_TYPE_ID);
            }
            if (swedenCheckbox.checked) {
                checkedCountries.push(1);
            }
            if (spainCheckbox.checked) {
                checkedCountries.push(2);
            }
            if (germanyCheckbox.checked) {
                checkedCountries.push(3);
            }
            if (usaCheckbox.checked) {
                checkedCountries.push(4);
            }
            if (ukCheckbox.checked) {
                checkedCountries.push(5);
            }
            if (franceCheckbox.checked) {
                checkedCountries.push(6);
            }
            if (italyCheckbox.checked) {
                checkedCountries.push(7);
            }
            if (japanCheckbox.checked) {
                checkedCountries.push(8);
            }

            if (checkedCountries.length > 0 || checkedKinds.length > 0) {
                const filteredShoes = array_filter(SHOES, function (shoe) {
                    const countryMatch = checkedCountries.length === 0 || checkedCountries.includes(shoe.country_id);
                    const kindMatch = checkedKinds.length === 0 || checkedKinds.includes(shoe.kind_id);
                    return countryMatch && kindMatch;
                });
                updateShoeList(filteredShoes);
            } else {
                updateShoeList(SHOES);
            }
        }
    });
}