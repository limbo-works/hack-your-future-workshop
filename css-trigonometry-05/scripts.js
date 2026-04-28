const mouseArea = document.querySelector('.trig-mouse-area');
const eyes = document.querySelectorAll('.trig-eye');

if (mouseArea && eyes.length > 0) {
  mouseArea.addEventListener('mousemove', (e) => {
    eyes.forEach(eye => {
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      eye.style.setProperty('--mouse-x', `${mouseX}px`);
      eye.style.setProperty('--mouse-y', `${mouseY}px`);
    });
  });
}
