function renderNavShoeKinds(parent, types) {

    const textAll = document.createElement("h2");
    textAll.classList.add("navType");
    textAll.classList.add("current");
    textAll.innerText = "All";
    textAll.id = "0";
    parent.appendChild(textAll);

    textAll.addEventListener("click", function () {
        // Update shoelist
    });;

    for (let type of types) {
        const text = document.createElement("h2");
        text.classList.add("navType");
        text.innerText = type.name;
        text.id = type.id;
        parent.appendChild(text);

        text.addEventListener("click", function () {
            // Update shoelist
        });

    }
}