document.addEventListener("DOMContentLoaded", () => {
  const demo = document.querySelector(".vf-demo");
  const inputs = document.querySelectorAll(".vf-controls input[type='range']");

  inputs.forEach((input) => {
    const axis = input.dataset.axis;
    const valueEl = document.querySelector(`[data-value-for="${axis}"]`);

    const update = () => {
      demo.style.setProperty(`--${axis}`, input.value);
      valueEl.textContent = input.value;
    };

    input.addEventListener("input", update);
    update();
  });
});
