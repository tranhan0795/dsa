function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  const result: number[][] = [];
  let current = intervals[0];
  let i = 1;

  while (i < intervals.length) {
    if (current[1] >= intervals[i][0]) {
      current = [current[0], Math.max(current[1], intervals[i][1])];
    } else {
      result.push(current);
      current = intervals[i];
    }
    i++;
  }
  result.push(current);

  return result;
}
