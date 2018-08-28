function catAndMouse(x, y, z) {
  let aDistance = Math.abs(z - x);
  let bDistance = Math.abs(z - y);

  if (aDistance < bDistance) return "Cat A";
  if (bDistance < aDistance) return "Cat B";
  if (aDistance === bDistance) return "Mouse C";
}