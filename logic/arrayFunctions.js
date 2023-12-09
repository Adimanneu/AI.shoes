
// Skapade "arrayFind" fär att se så att komponenterna funkade och renderas på hemsidan
function arrayFind(array, findFunction) {
    // Loopar igenom array och anropar funktionen findFunction med varje element i array som argument
    for (let i = 0; i < array.length; i++) {
        if (findFunction(array[i])) {
            // Loopen (och funktionen) avbryts när ett findFunction returnerar true
            // Funktionen returnerar elementet i array för vilken findFunction returnerade true
            return array[i];
        }
    }
}

function array_filter(array, filterFunction) {
    let temp = [];

    for (let element of array) {
        if (filterFunction(element)) {
            temp.push(element);
        }
    }
    return temp;
}
