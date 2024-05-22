/**
 * Detects changes in mouse position and saves them
 * in as css variables.
 */
window.addEventListener("mousemove", function ({ clientX, clientY }) {
  document.body.style.setProperty("--x", clientX + "px");
  document.body.style.setProperty("--y", clientY + "px");
});
