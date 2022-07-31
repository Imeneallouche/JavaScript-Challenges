const allPanels = document.querySelectorAll(".panel");

function ToggleOpenActiveClass(EventSelected) {
  if (EventSelected.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function ToggleOpenClass() {
  this.classList.toggle("open");
}

allPanels.forEach((Panel) =>
  Panel.addEventListener("transitionend", ToggleOpenActiveClass)
);

allPanels.forEach((Panel) => Panel.addEventListener("click", ToggleOpenClass));
