
function render_structure ()
{
  const container = document.querySelector("#wrapper");
  container.innerHTML = `
    <header>
        <nav id= "nav_bar">
            <a>ALL</a>
            <a>BOOTS</a>
            <a>SNEAKERS</a>
            <a>TOFFLOR</a>
            <a>ABOUT US</a>
        </nav>
    </header>
    <main>
        <div id="top">
            <h1><h1>
            <p></p>
        </div>
        <div id="bottom">
        </div>
      
    </main>
    
    <footer></footer>
  `;

  return {
    header: container.querySelector("header"),
    main: container.querySelector("main"),
    nav: container.querySelector("#nav_bar"),
    top: container.querySelector("#top"),
    bottom: container.querySelector("#bottom"),
  };
}
const body = document.body;
render_structure (body);

