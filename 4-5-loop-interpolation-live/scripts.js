/**
 * https://en.wikipedia.org/wiki/Linear_interpolation
 */
function interpolate(v0, v1, t) {
  return (1 - t) * v0 + t * v1;
}
