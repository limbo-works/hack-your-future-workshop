document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".target");
  const splitWords = document.querySelectorAll(".target-words");

  items.forEach((item) => {
    let index = 0;

    const text = item.textContent;
    item.innerHTML = text
      .split(" ")
      .map((word) => {
        return word
          .split("")
          .map((char) => `<span style="--index:${index++}">${char}</span>`)
          .join("");
      })
      .join(" ");
  });

  splitWords.forEach((item) => {
    let index = 0;

    const text = item.textContent;
    item.innerHTML = text
      .split(" ")
      .map((char) => `<span style="--index:${index++}">${char}</span>`)
      .join(" ");
  });
});
