function renderStructure() {
  const container = document.querySelector("#wrapper");
  container.innerHTML = `
      <header></header>

      <nav>
        <p>ALL</p>
        <p>BOOTS</p>
        <p>SNEAKERS</p>
        <p>TOFFLOR</p>
        <p>ABOUT US</p>
      </nav>
      
      <main>
        <section id="top">
          <h1></h1>
          <p></p>
        </section>

        <section id="bottom"></section>
      </main>
    `;

  // nycklarna skapas i return, skapar ett objekt med nycklar
  return {
    header: container.querySelector("header"),
    nav: container.querySelector("nav"),
    main: container.querySelector("main"),
    top: container.querySelector("#top"),
    bottom: container.querySelector("#bottom"),
  };
}