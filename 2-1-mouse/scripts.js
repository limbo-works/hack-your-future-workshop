/**
 * Detects changes in mouse position and saves them
 * in as css variables.
 */
window.addEventListener("mousemove", function ({ clientX, clientY }) {
  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;

  document.body.style.setProperty("--x", x);
  document.body.style.setProperty("--y", y);
});
