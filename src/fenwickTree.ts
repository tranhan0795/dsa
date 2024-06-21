class FenwickTree {
  private tree: number[];
  private n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(this.n + 1).fill(0);
    this.build(arr);
  }

  // Build the Fenwick Tree from the given array
  private build(arr: number[]): void {
    for (let i = 0; i < this.n; i++) {
      this.update(i + 1, arr[i]);
    }
  }

  // Add value to the element at index i (1-based index)
  update(index: number, value: number): void {
    while (index <= this.n) {
      this.tree[index] += value;
      index += index & -index;
    }
  }

  // Query the prefix sum from 1 to index (1-based index)
  query(index: number): number {
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }

  // Query the sum in range [left, right] inclusive (1-based index)
  rangeQuery(left: number, right: number): number {
    return this.query(right) - this.query(left - 1);
  }
}
