let last = 0;

function animate() {
  /**
   * RequestAnimationFrame calls a function on nex
   * frame render. In this case were just calling
   * the animate function again, creating a loop.
   * Read more on the link below.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
   */
  requestAnimationFrame(animate);

  /**
   * Calculates the time since last loop, delta
   * often just means difference.
   *
   * The performance.now() function returns the
   * current time in milliseconds. Read more on
   * the link below.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
   */
  const now = performance.now();
  const delta = now - last;
  last = now;

  /**
   * Console logs the delta value.
   */
  console.log(delta);
}

/**
 * This simply makes sure that the site is loaded
 * before starting the animation loop.
 */
document.addEventListener("DOMContentLoaded", function () {
  animate();
});
