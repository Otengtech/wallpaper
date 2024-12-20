
// showing Mobile Menu
const menu = document.querySelector(".mobileMenu")
const menuIcon = document.querySelector(".menuIcon")
function showMenu(){
  menu.style.display === "" ? menu.style.display = "flex" : menu.style.display = ""
}

const list = document.querySelectorAll(".list");
list.forEach((e) => {
  e.addEventListener("click", () => {
    list.forEach((e) => e.classList.remove("after"));

    e.classList.add("after");
  });
});
