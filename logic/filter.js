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

        // IDn för alla olika skor
        const SLIPPERS_TYPE_ID = 1;
        const BOOTS_TYPE_ID = 2; 
        const SNEAKERS_TYPE_ID = 3;

        const slippersCheckbox = document.getElementById("slippersCheckbox");
        const bootsCheckbox = document.getElementById("bootsCheckbox");
        const sneakersCheckbox = document.getElementById("sneakersCheckbox")

        // Event listener för om checkboxen blivit klickad
        slippersCheckbox.addEventListener("change", updateShoeListHandler);

        
        bootsCheckbox.addEventListener("change", updateShoeListHandler);


        sneakersCheckbox.addEventListener("change", updateShoeListHandler);
        function updateShoeListHandler() {
            // Skapa en array av alla checkboxar som är valda
            const checkedTypes = [];
            if (slippersCheckbox.checked) {
                checkedTypes.push(SLIPPERS_TYPE_ID);
            }
            if (bootsCheckbox.checked) {
                checkedTypes.push(BOOTS_TYPE_ID);
            }

            if (sneakersCheckbox.checked) {
                checkedTypes.push(SNEAKERS_TYPE_ID);
            }

            if (checkedTypes.length > 0) {
                // Om minst ett filter valts, visa en ny array av de filtrerade skorna
                const filteredShoes = array_filter(SHOES, function (shoe) {
                    return checkedTypes.includes(shoe.kind_id);
                });
                updateShoeList(filteredShoes);
            } else {
                // Om inga filter är valda, visa alla skor
                updateShoeList(SHOES);
            }
        }
    });
}

