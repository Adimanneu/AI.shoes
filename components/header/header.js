function render_header(parent) {
    parent.innerHTML = `
        <div class="h_class rubrik">AI.Shoes</div>
        <div class="h_class all">ALL</div>
        <div class="h_class boots">BOOTS</div>
        <div class="h_class sneakers">SNEAKERS</div>
        <div class="h_class slippers">SLIPPERS</div>
        <div class="h_class about">ABOUT US</div>
    `;

    let boots_click = document.querySelector(".boots");
    boots_click.addEventListener("click", f1);

    let sneaker_click = document.querySelector(".sneakers");
    sneaker_click.addEventListener("click", f2);

    let slippers_click = document.querySelector(".slippers");
    slippers_click.addEventListener("click", f3);

    let all_click = document.querySelector(".all");
    all_click.addEventListener("click", f4);

    let about_click = document.querySelector(".about");
    about_click.addEventListener("click", f5);

};

function f1(event) {
    let content = event.originalTarget.textContent;
    console.log(content);

    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1>BOOTS</h1>
    <p>lorem ipsum djsbgfskjf jd nfksn</p>
    `;
}


function f2(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1>SNEAKERS</h1>
    <p>lorem ipsum djsbgfskjf jd nfksn</p>
    `;
}

function f3(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1>SLIPPERS</h1>
    <p>lorem ipsum djsbgfskjf jd nfksn</p>
    `;
}

function f4(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1>ALL</h1>
    <p>lorem ipsum djsbgfskjf jd nfksn</p>
    `;
}

function f5(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1>ABOUT US</h1>
    <p>lorem ipsum djsbgfskjf jd nfksn</p>
    `;
}

