document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".target");
  var splitWords = document.querySelectorAll(".target-words");

  /**
   * Splits each word into individual characters.
   */
  items.forEach((item) => {
    var index = 0;
    var text = item.textContent;

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

  /**
   * Splits each character into individual characters, taking words into account.
   */
  splitWords.forEach((item) => {
    var index = 0;
    var text = item.textContent;

    item.innerHTML = text
      .split(" ")
      .map((char) => `<span style="--index:${index++}">${char}</span>`)
      .join(" ");
  });
});
