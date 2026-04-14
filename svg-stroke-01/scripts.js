function updateDashOffset() {
    const value = document.getElementById("dash-offset").value;
    document
        .getElementById("demo")
        .style.setProperty("--dash-offset", `${value}`);
}
function updateDashArray() {
    const value = document.getElementById("dash-array").value;
    document
        .getElementById("demo")
        .style.setProperty("--dash-array", `${value}`);
}
