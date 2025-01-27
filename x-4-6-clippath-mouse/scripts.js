let xActual = 0;
let yActual = 0;
let xTarget = 0;
let yTarget = 0;
let last = 0;

/**
 * https://en.wikipedia.org/wiki/Linear_interpolation
 */
function interpolate(v0, v1, t) {
  return (1 - t) * v0 + t * v1;
}

/**
 * Animation loop, see example: 2-3-loop
 */
function animate(now) {
  window.requestAnimationFrame(animate);

  /**
   * Calculates time, since we last updated.
   * Delta often just means difference.
   * 16 = ~16ms per frame, when the frame rate is 60hz.
   */
  const delta = (now - last) / 16;
  last = now;

  /**
   * Interpolates xActual and yActual towards xTarget and yTarget,
   * taking the delta value into account.
   *
   * See example: 2-4-interpolation
   */
  xActual = interpolate(xActual, xTarget, 0.05 * delta);
  yActual = interpolate(yActual, yTarget, 0.05 * delta);

  /**
   * Sets xActual and yActual as CSS variables.
   */
  document.body.style.setProperty("--x", xActual);
  document.body.style.setProperty("--y", yActual);
}

/**
 * Start the animation loop, once the content has loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
  animate(performance.now());
});

/**
 * Detects changes in mouse position and saves them
 * in the variables x and y.
 */
window.addEventListener("mousemove", function ({ clientX, clientY }) {
  xTarget = clientX / window.innerWidth;
  yTarget = clientY / window.innerHeight;
});
