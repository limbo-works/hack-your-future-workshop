document.addEventListener("DOMContentLoaded", function () {
    const animateIn = document.querySelectorAll(".animation-layer");

    // get the total length of the paths and set the stroke-dasharray and stroke-dashoffset
    for (var item of animateIn) {
        if (item.getTotalLength) {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.strokeDashoffset = item.getTotalLength();
        }
    }
    // set timeout to only show mark after stroke is set
    setTimeout(() => {
        document.querySelector(".hack-mark").classList.add("active");
    }, 1900);
});
