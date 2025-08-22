window.addEventListener("load", function () {
  const closeBtn = this.document.querySelector("#close");
  const openBtn = this.document.querySelector("#open");
  const header = this.document.querySelector("#popUp");
  closeBtn.addEventListener("click", () => {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    header.classList.add("active");
  });
  openBtn.addEventListener("click", () => {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    header.classList.remove("active");
  });
  //
  //
  const menus = this.document.querySelectorAll(".tab-nav > li > a");
  const content = this.document.querySelectorAll(".content");
  //
  //
  menus.forEach((menu, index) => {
    menu.addEventListener("click", () => {
      menus.forEach((m) => {
        m.classList.remove("active");
      });
      content.forEach((c) => {
        c.classList.remove("active");
      });
      content[index].classList.add("active");
      menu.classList.add("active");
    });
  });
  //
  //
  // goTop
  const goTop = this.document.querySelector("#goTop");
  goTop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
