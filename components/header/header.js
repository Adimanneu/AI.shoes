function render_header(parent) {
    parent.innerHTML = `
        <div class="h_class rubrik">AI.shoes</div>
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
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1 class="shoe_rubrik">BOOTS</h1>
    <p class="info_shoe">
    Explore our impressive collection of boots - the ultimate fusion of style and functionality. Our boots are designed to take you through every season and occasion, from rugged and durable work boots to trendy and elegant city styles. Crafted with premium materials and meticulous craftsmanship, our boots offer you both comfort and lasting style. Whether you prefer classic leather, modern textures, or sporty details, we have a wide selection to suit your personal taste. From adventures in nature to urban escapades, our boots will take you there in style.
    </p>
    `;
}

function f2(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1 class="shoe_rubrik">SNEAKERS</h1>
    <p class="info_shoe">Discover our fantastic range of sneakers - a perfect blend of comfort and trend. Our sneakers are crafted to fit every style and occasion, from casual everyday adventures to sporty performances. With high-quality materials and modern design, our sneakers offer both style and support for your feet. Whether you prefer classic colors or dare to go bold with patterns and details, we have a broad range to match your personal taste. Step forward in style and comfort with our sneakers, whether you're taking a stroll around the block or embracing new challenges on the go.</p>
    `;
}

function f3(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1 class="shoe_rubrik">SLIPPERS</h1>
    <p class="info_shoe">Welcome to our collection of slippers - your perfect companions for relaxation and comfort. Our slippers are created to give your feet a haven of comfort after a long day. Made with soft materials and ergonomic design, our slippers provide a sense of luxury and respite for your tired feet. Whether you prefer warm and fluffy options for winter or cool and airy for summer, we offer a wide selection that caters to your preferences and needs. Relax at home in style and enjoy every step you take in our comfortable and stylish slippers.</p>
    `;
}

function f4(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <h1 class="shoe_rubrik">ALL</h1>
    `;
}

function f5(event) {
    let n = document.querySelector("nav");
    n.innerHTML = `
    <div class="about_popup">
        <div class="about_popup_container">
            <div class="about_popup_closebutton">X</div>
            <img src="media/images_aboutus/niagara.jpg" alt="Malmö Universitet" class="about_popup_image">
            <div class="about_textcontent">
                <h1 class="popup_h1">Malmö Universitet</h1>
                <h3 class="popup_h3">Webbaserad design & Utveckling</h3>
                <h4 class="popup_h4">JAVASCRIPT - DU2</h4>
            </div>
        </div>
    </div>
    `;

    document.body.appendChild(n);

    let closeButton = n.querySelector(".about_popup_closebutton");
    closeButton.addEventListener("click", f6);
}

function f6(event) {
    let n = document.querySelector(".about_popup");
    n.remove();
}

