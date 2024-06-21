class SumFenwickTree {
  tree: number[];

  constructor(values: number[]) {
    this.tree = new Array(values.length + 1).fill(0);
    this.build(values);
  }

  // Build the Fenwick Tree from an initial array
  build(values: number[]) {
    const n = this.tree.length - 1;
    for (let i = 1; i <= n; i++) {
      this.update(i, values[i - 1]);
    }
  }

  // Update the value at index idx by delta (delta can be positive or negative)
  update(idx: number, delta: number) {
    while (idx < this.tree.length) {
      this.tree[idx] += delta;
      idx += idx & -idx;
    }
  }

  // Query the prefix sum from index 1 to idx
  query(idx: number): number {
    let sum = 0;
    while (idx > 0) {
      sum += this.tree[idx];
      idx -= idx & -idx;
    }
    return sum;
  }

  // Query the sum from index left to right (inclusive)
  rangeQuery(left: number, right: number): number {
    if (left > right) {
      return 0;
    }
    return this.query(right) - this.query(left - 1);
  }
}

class MaxFenwickTree {
  tree: number[];
  size: number;

  constructor(values: number[]) {
    this.size = values.length;
    this.tree = new Array(this.size + 1).fill(-Infinity);
    this.build(values);
  }

  // Build the max Fenwick Tree from initial values
  build(values: number[]) {
    for (let i = 0; i < values.length; i++) {
      this.update(i + 1, values[i]);
    }
  }

  // Update the value at index idx to the maximum of current value and val
  update(idx: number, val: number) {
    while (idx <= this.size) {
      this.tree[idx] = Math.max(this.tree[idx], val);
      idx += idx & -idx;
    }
  }

  // Query the maximum prefix sum from index 1 to idx
  query(idx: number): number {
    let max = -Infinity;
    while (idx > 0) {
      max = Math.max(max, this.tree[idx]);
      idx -= idx & -idx;
    }
    return max;
  }
}

class MinFenwickTree {
  tree: number[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.tree = new Array(size + 1).fill(Infinity);
  }

  // Build the min Fenwick Tree from initial values
  build(values: number[]) {
    for (let i = 0; i < values.length; i++) {
      this.update(i + 1, values[i]);
    }
  }

  // Update the value at index idx to the minimum of current value and val
  update(idx: number, val: number) {
    while (idx <= this.size) {
      this.tree[idx] = Math.min(this.tree[idx], val);
      idx += idx & -idx;
    }
  }

  // Query the minimum prefix sum from index 1 to idx
  query(idx: number): number {
    let min = Infinity;
    while (idx > 0) {
      min = Math.min(min, this.tree[idx]);
      idx -= idx & -idx;
    }
    return min;
  }
}
