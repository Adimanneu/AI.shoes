function render_structure ()
{
  const container = document.querySelector("#wrapper");
  container.innerHTML = `
  
  <div id="wrapper">
    <header></header>
    <nav>
      <a>ALL</a>
      <a>BOOTS</a>
      <a>SNEAKERS</a>
      <a>TOFFLOR</a>
      <a>ABOUT US</a>
    </nav>
    <main>
      <div id="top">
        <h1><h1>
        <p></p>
      </div>
      <div id="bottom></div>
    </main>
  <div>
  `;

  return {
    header: container.querySelector("header"),
    main: container.querySelector("main"),
    nav: container.querySelector("nav"),
    top: container.querySelector("#top"),
    bottom: container.querySelector("#bottom"),
  };
}
