document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready!");
    console.log("Hello World!");
    // Code to be executed when the DOM is ready

    const animateIn = document.querySelectorAll(".animation-layer");
    const animateOut = document.querySelectorAll(".animation-out-layer");
    for (var item of animateIn) {
        if (item.getTotalLength) {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.strokeDashoffset = item.getTotalLength();
        }
    }
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
