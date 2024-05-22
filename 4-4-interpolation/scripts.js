/**
 * https://en.wikipedia.org/wiki/Linear_interpolation
 */
function interpolate(v0, v1, t) {
  return (1 - t) * v0 + t * v1;
}

/**
 * This functions runs each time, the user
 * 'pulls' the range input.
 */
function updateModifier() {
  const input = document.querySelector("input");
  const target = document.querySelector(".target");

  /**
   * Runs the lerp function multiple times,
   * based on how much the user has pulled the
   * range input. Getting one percent closer to
   * the goal each time.
   */
  let p = 0;
  for (let i = 0; i < +input.value; i++) {
    p = interpolate(p, 1, 0.01);
  }

  /**
   * Sets the result of the lerp function as a
   * css variable.
   */
  target.style.setProperty("--p", p);
}

/**
 * This part can safely be ignored.
 */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".timeline div");

  for (let i = 0; i < elements.length; i++) {
    let p = 0;
    for (let j = 0; j < i; j++) {
      p = interpolate(p, 1, 0.3);
    }

    elements[i].style.setProperty("--p", p);
  }
});
