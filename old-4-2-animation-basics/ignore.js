let modifier = 16;

let lastTime = 0;
let step = 0;
let counter = 0;

/**
 * JavaScript implementation of cubic bezier easing function.
 *
 * @param {Number} x0
 * @param {Number} y0
 * @param {Number} x1
 * @param {Number} y1
 * @param {Object} options
 * @returns
 */
function cubicBezier(x0, y0, x1, y1, options) {
  const precision = options?.precision ?? 256;
  const maxIterations = options?.maxIterations ?? 32;
  const maxErrorMargin = options?.maxErrorMargin ?? 1 / 10 ** 8;

  const getBezierFunction = (p1, p2, t) => {
    const a0 = 3 * t * (1 - t) ** 2 * p1;
    const a1 = 3 * (1 - t) * t ** 2 * p2;
    return a0 + a1 + t ** 3;
  };

  const sampleX = (u) => getBezierFunction(x0, x1, u);
  const sampleY = (u) => getBezierFunction(y0, y1, u);
  const steps = new Array(precision + 1);

  for (let index = 0; index <= precision; index++) {
    let x0 = index / precision - 1 / 10 ** 3;
    let x1 = index / precision + 1 / 10 ** 3;
    let x2 = 0;

    for (let iteration = 0; iteration < maxIterations; iteration++) {
      const ox0 = sampleX(x0) - index / precision;
      const ox1 = sampleX(x1) - index / precision;

      x2 = (x0 * ox1 - x1 * ox0) / (ox1 - ox0);
      x0 = x1;
      x1 = x2;

      if (Math.abs(sampleX(x2) - index / precision) < maxErrorMargin) {
        break;
      }
    }

    steps[index] = sampleY(x2);
  }

  return (x) => {
    const upper = Math.floor(x * precision);
    const lower = Math.ceil(x * precision);

    const x0 = upper / precision ?? 0;
    const x1 = lower / precision ?? 1;
    const y0 = steps[upper] ?? 0;
    const y1 = steps[lower] ?? 1;

    const percentage = (x - x0) / (x1 - x0) || 0;
    return (y1 - y0) * percentage + y0;
  };
}

/**
 * Animation loop.
 */
function animate() {
  window.requestAnimationFrame(animate);

  const now = performance.now();
  const delta = now - lastTime;
  lastTime = now;
  counter += 0.001 * delta;

  const bezier = cubicBezier(0.4, 0, 0.6, 1);

  step = Math.round(counter * modifier * 0.5) % modifier;
  step = Math.abs(step - modifier * 0.5);
  step = bezier(step / (modifier * 0.5));

  console.log(step);
  document.body.style.setProperty("--step", step);
}

/**
 * Run setup once the document is loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
  animate(performance.now());

  const bezier = cubicBezier(0.4, 0, 0.6, 1);
  const elements = document.getElementsByClassName("example");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.setProperty("--p", bezier(i / (elements.length - 1)));
  }
});

/**
 * This runs when the user changes the input value,
 * on the range input.
 */
function updateModifier() {
  const el = document.querySelector("input");
  modifier = +el.value;
}
