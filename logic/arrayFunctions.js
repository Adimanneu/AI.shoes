function array_find(a, test_function) {
    // Loopar igenom arrayen a och anropar funktionen test_function med varje element i a som argument.
    for (let i = 0; i < a.length; i++) {
        if (test_function(a[i])) {
            // Loopen (och funktionen) avbryts när ett test_function returnerar true.
            // Funktionen returnerar elementet i a för vilken test_function returnerade true.
            return a[i];
        }
    }
}

function arrayRandomElement(a) {
    const random_index = get_random_number(a.length);
    return a[random_index];
}

function get_random_number(max, min = 0) {
    // Returns a random number between min (inclusive) and max (exclusive)

    // Du behöver inte förstå det matematiska uttrycket nedan.
    // Du måste dock förstå hur denna funktion används i array_random_element (array_functions.js)
    return min + Math.floor(max * Math.random());
}

