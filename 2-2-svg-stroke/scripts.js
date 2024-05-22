document.addEventListener("DOMContentLoaded", function () {
    const animateIn = document.querySelectorAll(".animation-layer");
    const animateOut = document.querySelectorAll(".animation-out-layer");

    // set values on animateIn layers
    for (var item of animateIn) {
        if (item.getTotalLength) {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.strokeDashoffset = item.getTotalLength();
        }
    }
    // set values on animateOut layers

    for (var layer of animateOut) {
        if (layer.getTotalLength) {
            layer.style.strokeDasharray =
                "0," +
                layer.getTotalLength() +
                " " +
                2 * layer.getTotalLength();
            layer.style.strokeDashoffset = layer.getTotalLength();
        }
    }
});
