const zFnc = (s: string) => {
  let z = Array(s.length);
  z[0] = 0;
  let r = 0;
  let l = 0;
  const len = s.length;

  for (let i = 1; i < len; i++) {
    if (i > r) {
      r = i;
      l = i;
      while (r < len && s[r] === s[r - i]) {
        r++;
      }
      z[i] = r - i;
      r--;
    } else {
      const k = i - l;
      //    console.log(k, r, i);
      if (z[k] + i >= r + 1) {
        l = i;
        while (r < len && s[r] === s[r - i]) {
          r++;
        }
        z[i] = r - i;
        r--;
      } else {
        z[i] = z[k];
      }
    }
  }

  return z;
};
