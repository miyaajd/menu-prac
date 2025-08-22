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
      content.forEach((c) => {
        c.classList.remove("active");
      });
      content[index].classList.add("active");
    });
  });
});
