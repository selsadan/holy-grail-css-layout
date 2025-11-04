function toggleNav() {
    const innerGridCollapse = document.querySelector(".outer-grid");
    innerGridCollapse.classList.toggle("outer-grid-collapse");

    const nav = document.querySelector("nav");
    nav.classList.toggle("hide-nav");
}
