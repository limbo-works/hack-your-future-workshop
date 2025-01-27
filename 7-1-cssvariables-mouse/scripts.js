/**
 * Detects changes in mouse position and saves them
 * in as css variables. To read more about css variables,
 * please see the link below.
 *
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
 */
window.addEventListener("mousemove", function (event) {
  document.body.style.setProperty("--x", event.clientX + "px");
  document.body.style.setProperty("--y", event.clientY + "px");
});
