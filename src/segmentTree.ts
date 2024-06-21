class MinSegmentTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  // Build the segment tree
  private build(arr: number[]): void {
    // Initialize leaves
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }

    // Build the tree by calculating parents
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = Math.min(this.tree[2 * i], this.tree[2 * i + 1]);
    }
  }

  // Update an element in the segment tree
  update(pos: number, value: number): void {
    pos += this.n; // Shift the index to the leaf
    this.tree[pos] = value;

    // Update the tree upwards
    while (pos > 1) {
      pos = Math.floor(pos / 2);
      this.tree[pos] = Math.min(this.tree[2 * pos], this.tree[2 * pos + 1]);
    }
  }

  // Query the minimum value in a range [left, right] inclusive
  query(left: number, right: number): number {
    left += this.n; // Shift the index to the leaf
    right += this.n; // Shift the index to the leaf
    let minValue = Infinity;

    while (left <= right) {
      if (left % 2 === 1) {
        minValue = Math.min(minValue, this.tree[left]);
        left++;
      }
      if (right % 2 === 0) {
        minValue = Math.min(minValue, this.tree[right]);
        right--;
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return minValue;
  }
}

class MaxSegmentTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  // Build the segment tree
  private build(arr: number[]): void {
    // Initialize leaves
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }

    // Build the tree by calculating parents
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = Math.max(this.tree[2 * i], this.tree[2 * i + 1]);
    }
  }

  // Update an element in the segment tree
  update(pos: number, value: number): void {
    pos += this.n; // Shift the index to the leaf
    this.tree[pos] = value;

    // Update the tree upwards
    while (pos > 1) {
      pos = Math.floor(pos / 2);
      this.tree[pos] = Math.max(this.tree[2 * pos], this.tree[2 * pos + 1]);
    }
  }

  // Query the maximum value in a range [left, right)
  query(left: number, right: number): number {
    left += this.n; // Shift the index to the leaf
    right += this.n; // Shift the index to the leaf
    let maxValue = -Infinity;

    while (left < right) {
      if (left % 2 === 1) {
        maxValue = Math.max(maxValue, this.tree[left]);
        left++;
      }
      if (right % 2 === 1) {
        right--;
        maxValue = Math.max(maxValue, this.tree[right]);
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return maxValue;
  }
}

class SumSegmentTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(2 * this.n);
    this.build(arr);
  }

  // Build the segment tree
  private build(arr: number[]): void {
    // Initialize leaves
    for (let i = 0; i < this.n; i++) {
      this.tree[this.n + i] = arr[i];
    }

    // Build the tree by calculating parents
    for (let i = this.n - 1; i > 0; i--) {
      this.tree[i] = this.tree[2 * i] + this.tree[2 * i + 1];
    }
  }

  // Update an element in the segment tree
  update(pos: number, value: number): void {
    pos += this.n; // Shift the index to the leaf
    this.tree[pos] = value;

    // Update the tree upwards
    while (pos > 1) {
      pos = Math.floor(pos / 2);
      this.tree[pos] = this.tree[2 * pos] + this.tree[2 * pos + 1];
    }
  }

  // Query the sum in a range [left, right] inclusive
  query(left: number, right: number): number {
    left += this.n; // Shift the index to the leaf
    right += this.n; // Shift the index to the leaf
    let sum = 0;

    while (left <= right) {
      if (left % 2 === 1) {
        sum += this.tree[left];
        left++;
      }
      if (right % 2 === 0) {
        sum += this.tree[right];
        right--;
      }
      left = Math.floor(left / 2);
      right = Math.floor(right / 2);
    }

    return sum;
  }
}
