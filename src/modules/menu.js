const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  menuBtn.addEventListener("click", () => {
    if (!menu.style.transform) {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(-100%)";
    }
  });
};
export default menu;
