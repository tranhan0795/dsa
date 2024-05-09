function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  //find pivot index (pivot = l = r)
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] < nums[0]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  //[4,5,6,7,0,1,2]
  // l = r = 4

  if (target < nums[0]) {
    r = nums.length - 1;
  } else {
    l = 0;
  }

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
}
