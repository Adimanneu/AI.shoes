function renderStructure() {
  const container = document.querySelector("#wrapper");
  container.innerHTML = `
      <header></header>
      <nav></nav>
      <main>
        <div id="top"></div>
        <div id="bottom"></div>
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