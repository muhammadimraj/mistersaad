export const openSidebar = () => {
  document
    .querySelector(".tmp-sidebar-area")
    .classList.add("tmp_side_bar_open");

  document.body.classList.add("sidemenu-active");
};
export const closeSidebar = () => {
  document
    .querySelector(".tmp-sidebar-area")
    .classList.remove("tmp_side_bar_open");
  document.body.classList.remove("sidemenu-active");
};
