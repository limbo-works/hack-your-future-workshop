document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".target");

  items.forEach((item) => {
    const text = item.textContent;
    item.innerHTML = text
      .split("")
      .map((char, index) => `<span style="--index:${index}">${char}</span>`)
      .join("");
  });
});
