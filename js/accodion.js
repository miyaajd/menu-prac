window.addEventListener("load", function () {
  const menus = this.document.querySelectorAll(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  menus.forEach(function (menu, index) {
    // console.log(menu , index);
    menu.addEventListener("click" , function(){
        // console.log("메뉴클릭");
        const currentsub = submenus[index]
        // console.log(currentsub);
        // 이미 열려잇으면 닫기
        if(currentsub.classList.contains("active")){
            currentsub.classList.remove("active")
        }else {
            // 열려잇는 다른메뉴 닫기
            submenus.forEach(function(sub , index){
                // console.log(sub);
                sub.classList.remove("active")
            })
            // 선택한 메뉴 열기
            currentsub.classList.add("active")
        }
        
    })
  });
});
