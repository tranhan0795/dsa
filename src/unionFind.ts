class UnionFindByRank {
  parent: number[];
  rank: number[];
  count: number;

  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.rank = new Array(size).fill(0);
    this.count = size; // Initially, each element is its own set, so count equals the size
  }

  // Find the root of the set containing x, with path compression
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // Union the sets containing x and y, using union by rank
  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1;
      }
      this.count--; // Decrement the count when two sets are united
    }
  }

  // Check if x and y are in the same set
  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  // Get the current number of distinct parents
  getCount(): number {
    return this.count;
  }
}

class UnionFindBySize {
  parent: number[];
  size: number[];
  count: number;

  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.size = new Array(size).fill(1);
    this.count = size; // Initially, each element is its own set, so count equals the size
  }

  // Find the root of the set containing x, with path compression
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // Union the sets containing x and y, using union by size
  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.size[rootX] < this.size[rootY]) {
        this.parent[rootX] = rootY;
        this.size[rootY] += this.size[rootX];
      } else {
        this.parent[rootY] = rootX;
        this.size[rootX] += this.size[rootY];
      }
      this.count--; // Decrement the count when two sets are united
    }
  }

  // Check if x and y are in the same set
  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  // Get the size of the set containing x
  getSize(x: number): number {
    return this.size[this.find(x)];
  }

  // Get the current number of distinct parents (roots)
  getCount(): number {
    return this.count;
  }
}

class UnionFind {
  parent: number[];
  count: number;

  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.count = size; // Initially, each element is its own set, so count equals the size
  }

  // Find the root of the set containing x, with path compression
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  // Union the sets containing x and y
  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootY] = rootX; // Connect rootY under rootX
      this.count--; // Decrement the count when two sets are united
    }
  }

  // Check if x and y are in the same set
  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  // Get the current number of distinct sets (roots)
  getCount(): number {
    return this.count;
  }
}
