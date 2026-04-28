const angleInput = document.getElementById('angle');
const radiusInput = document.getElementById('radius');
const angleVal = document.getElementById('angle-val');
const radiusVal = document.getElementById('radius-val');
const angleTexts = document.querySelectorAll('.angle-text');
const radiusTexts = document.querySelectorAll('.radius-text');

function update() {
    const angle = angleInput.value;
    const radius = radiusInput.value;

    // Update CSS variables
    document.documentElement.style.setProperty('--angle', `${angle}deg`);
    document.documentElement.style.setProperty('--radius', `${radius}px`);

    // Update display values
    angleVal.textContent = angle;
    radiusVal.textContent = radius;

    angleTexts.forEach(el => el.textContent = `${angle}deg`);
    radiusTexts.forEach(el => el.textContent = `${radius}px`);
}

angleInput.addEventListener('input', update);
radiusInput.addEventListener('input', update);

// Initial update
update();
