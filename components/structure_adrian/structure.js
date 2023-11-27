function renderStructure() {
    const container = document.querySelector("#wrapper");
    container.innerHTML = `
        <header>
        </header>
  
        <nav>
        </nav>
        
        <main>
          <section id="top">
          </section>
  
          <section id="bottom">
          </section>
        </main>
      `;

    return {
        header: container.querySelector("header"),
        nav: container.querySelector("nav"),
        main: container.querySelector("main"),
        top: container.querySelector("#top"),
        bottom: container.querySelector("#bottom"),
    };
}