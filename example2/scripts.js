document.addEventListener("DOMContentLoaded", function () {
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
    setTimeout(() => {
        const active = document.querySelector(".icon").classList.add("active");
        console.log("active", active);
    }, 1900);

    // document.body.addEventListener( 'mousemove', (e) => {
    //   document.documentElement.style.setProperty('--mouse-x', `${e.pageX}px`);
    //   document.documentElement.style.setProperty('--mouse-y', `${e.pageY}px`);
    // });
});
