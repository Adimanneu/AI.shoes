function renderNavShoeKinds(parent, types) {

    // Skapar en div med texten "ALL"
    const textAll = document.createElement("div");
    textAll.innerText = "ALL";

    // Ger den klasserna "all" & "h_class"
    textAll.classList.add("all");
    textAll.classList.add("h_class");
    textAll.id = "0";

    // Lägger till den i navbaren
    parent.appendChild(textAll);

    // När man trycker på texten "ALL" anropas funktioner som uppdaterar sko listan
    textAll.addEventListener("click", function (event) {
        updateShoeList(SHOES);
    });;

    for (let type of types) {
        // I databasen heter slippers tofflor
        if (type.name == "Tofflor") {
            const text = document.createElement("div");
            text.innerText = "SLIPPERS";

            text.classList.add("h_class");
            text.classList.add("slippers");
            text.id = type.id;

            parent.appendChild(text);

            text.addEventListener("click", function (event) {
                let clickedShoeArray = array_filter(SHOES, function (obj) {
                    return obj.kind_id == event.target.id;
                });
                updateShoeList(clickedShoeArray);
            });
        } else {
            const text = document.createElement("div");
            text.innerText = type.name.toUpperCase();


            text.classList.add("h_class");
            text.classList.add(type.name.toLowerCase());
            text.id = type.id;

            parent.appendChild(text);

            text.addEventListener("click", function (event) {
                // Skapar en ny array med skor som endast är den typen användaren klickar på
                let clickedShoeArray = array_filter(SHOES, function (obj) {
                    // Event.target.id är id:et från den diven(typen) användaren tryckte på
                    return obj.kind_id == event.target.id;
                });
                // Anropar funktionen som uppdaterar listan
                updateShoeList(clickedShoeArray);
            });
        }
    }
}