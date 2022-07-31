const inputsControls = document.querySelectorAll(".controls input");
console.log(document.documentElement);

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputsControls.forEach((input) =>
  input.addEventListener("change", handleUpdate)
);
inputsControls.forEach((input) =>
  input.addEventListener("mousemove", handleUpdate)
);
