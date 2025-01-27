document.addEventListener("DOMContentLoaded", function () {
    const animateIn = document.querySelectorAll(".animation-layer");
    for (var item of animateIn) {
        if (item.getTotalLength) {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.strokeDashoffset = item.getTotalLength();
        }
    }
});
