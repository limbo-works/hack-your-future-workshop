/**
 * Detects changes in mouse position and saves them
 * in as css variables. To read more about css variables,
 * please see the link below.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 */
let actualX = 0;
let actualY = 0;
let targetX = 0;
let targetY = 0;
let last = 0;

window.addEventListener("mousemove", function (event) {
  targetX = (event.clientX / window.innerWidth) * 2 - 1;
  targetY = (event.clientY / window.innerHeight) * 2 - 1;
});

function update() {
  window.requestAnimationFrame(update);

  const now = performance.now();
  const delta = now - last;
  last = now;

  actualX = lerp(actualX, targetX, 0.005 * delta);
  actualY = lerp(actualY, targetY, 0.005 * delta);

  document.body.style.setProperty("--x", actualX);
  document.body.style.setProperty("--y", actualY);
}

function lerp(v0, v1, t) {
  return (1 - t) * v0 + t * v1;
}

window.addEventListener("load", update);
