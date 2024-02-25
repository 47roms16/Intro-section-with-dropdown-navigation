const dropdownBtns = document.querySelectorAll(".nav__button-dropdown");
const dropdownBtnsMobile = document.querySelectorAll(
  ".button__dropdown-mobile"
);

const toggleDropdown = (btns, items) => {
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const isActive = items[index].classList.toggle("active");
      btns[index].classList.toggle("active");
      items[index].classList.toggle("block");
      items[index].setAttribute("aria-hidden", isActive ? "false" : "true");
    });
  });
};

toggleDropdown(dropdownBtns, document.querySelectorAll(".dropdown"));
toggleDropdown(
  dropdownBtnsMobile,
  document.querySelectorAll(".mobile-dropdown")
);
