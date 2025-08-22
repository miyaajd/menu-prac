window.addEventListener("load", function () {
  const tabBtn = this.document.querySelectorAll(".tabBtn");
  const tabDscr = this.document.querySelectorAll(".tabDscr");
  tabBtn.forEach((btn, index) => {
    // console.log(btn, index);
    btn.addEventListener("click", () => {
      tabBtn.forEach((t) => {
        // console.log(t);
        t.classList.remove("active");
      });
      tabDscr.forEach((d) => {
        d.classList.remove("active");
      });
      btn.classList.add("active");
      tabDscr[index].classList.add("active");
      // console.log(tabDscr[index]);
    });
  });
  //
  //
  const ml = this.document.querySelectorAll(".ml");
  const mlDscr = this.document.querySelectorAll(".mlDscr");
  ml.forEach((m, index) => {
    m.addEventListener("click", () => {
      ml.forEach((l) => {
        if (m !== l) {
          l.classList.remove("change");
        }
      });
      mlDscr.forEach((d) => {
        if (d !== mlDscr[index]) {
          d.classList.remove("change");
        }
      });
      m.classList.toggle("change")
      mlDscr[index].classList.toggle("change")
    });
  });
});
