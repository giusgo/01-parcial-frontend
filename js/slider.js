document.addEventListener("DOMContentLoaded", () => {
  const minSlider = document.getElementById("salary-min");
  const maxSlider = document.getElementById("salary-max");
  const range = document.querySelector(".salary-slider .range");

  updateSlider();

  minSlider.addEventListener("input", updateSlider);
  maxSlider.addEventListener("input", updateSlider);

  function updateSlider() {
    if (Number.parseInt(minSlider.value) > Number.parseInt(maxSlider.value)) {
      minSlider.value = maxSlider.value;
    }

    const minPercent =
      ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) *
      100;
    const maxPercent =
      ((maxSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) *
      100;

    range.style.left = minPercent + "%";
    range.style.width = maxPercent - minPercent + "%";
  }
});
