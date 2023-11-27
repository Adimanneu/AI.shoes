function render_structure ()
{
  const container = document.querySelector("#wrapper");
  

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