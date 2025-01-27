document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty("--x", `${x}px`);
        document.documentElement.style.setProperty("--y", `${y}px`);
    });
});
