function render_structure ()
{
  const container = document.querySelector("body");
  container.innerHTML = `

    <nav>
        <p class="corner">AI.shose</p>
        <a>All</a>
        <a>Boots</a>
        <a>Sneakers</a>
        <a>Tofflor</a>
        <a>About Us</a>
        <div class="corner"></div>
    </nav>

    <main>

        <section id="top">
            <h1></h1>
            <p></p>
        </section>

        <div>
            <div id="filter_button"></div>
            <div id="sort_by"></div>
        </div>

        <section id="bottom">
            <div class="image"></div>
            <div class="image"></div>
            <div class="image"></div>
        </section>

    </main>

  `;

  return {
    nav: container.querySelector("nav"),
    top: container.querySelector("#top"),
    filterButton: container.querySelector("#filter_button"),
    sortBy: container.querySelector("#sort_by"),
    bottom: container.querySelector("#bottom")
  };
}