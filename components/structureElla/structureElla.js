function render_structure()
{
  const container = document.querySelector("body");
  container.innerHTML = `
    <nav></nav>
    <main>
      <section id="about"></section>
      <section id="top"></section>
      <section id="bottom"></section>
    </main>
  `;

  return {
    nav: container.querySelector("nav"),
    header: container.querySelector("#about"),
    top: container.querySelector("#top"),
    bottom: container.querySelector("#bottom"),
  };
}