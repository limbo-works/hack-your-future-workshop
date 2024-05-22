/**
 * Detects changes in mouse position and saves them
 * in as css variables. To read more about css variables,
 * please see the link below.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 */
window.addEventListener("mousemove", function ({ clientX, clientY }) {
  document.body.style.setProperty("--x", clientX + "px");
  document.body.style.setProperty("--y", clientY + "px");
});
