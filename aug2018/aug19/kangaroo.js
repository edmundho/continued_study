function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2 && v1 > v2) return "NO";
  if (x1 < x2 && v1 < v2) return "NO";

  let k1 = x1;
  let k2 = x2;

  let jumps = 0;
  let crossed = false;

  while (!crossed && jumps < 100000) {
    if (k1 === k2) crossed = true;
    k1 = k1 + v1;
    k2 = k2 + v2;

    jumps++;
  }

  return crossed ? "YES" : "NO";
}
