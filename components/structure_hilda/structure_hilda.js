function render_structure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
    <header>
        <nav></nav>
    </header>
    <main>
        <div id="top"></div>
        <div id="middle"></div>
        <div id="bottom"></div>
    </main>
  `;

    return {
        header: container.querySelector("header"),
        nav: container.querySelector("nav"),
        top: container.querySelector("#top"),
        middle: container.querySelector("#middle"),
        bottom: container.querySelector("#bottom"),
    };
}