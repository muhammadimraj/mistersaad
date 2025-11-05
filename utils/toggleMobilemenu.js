export const openMobilemenu = () => {
  const menu = document.querySelector(".tmp-popup-mobile-menu");
  if (menu) {
    menu.classList.add("active");
  }
};
export const closeMobilemenu = () => {
  const menu = document.querySelector(".tmp-popup-mobile-menu");
  if (menu) {
    menu.classList.remove("active");
  }
};
