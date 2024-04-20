// @ts-nocheck
import {
  MinPriorityQueue,
  PriorityQueue,
} from "@datastructures-js/priority-queue";

// Node class for linked list
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Binary Tree Node
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Definition for a binary tree with next pointer
class TreeLinkNode {
  val: number;
  left: TreeLinkNode | null;
  right: TreeLinkNode | null;
  next: TreeLinkNode | null;
  constructor(
    val?: number,
    left?: TreeLinkNode | null,
    right?: TreeLinkNode | null,
    next?: TreeLinkNode | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// Stack class
class Stack<T> {
  private stack: T[];
  constructor() {
    this.stack = [];
  }
  push(item: T) {
    this.stack.push(item);
  }
  pop(): T | undefined {
    return this.stack.pop();
  }
  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }
  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

// Queue class
class Queue<T> {
  private queue: T[];
  constructor() {
    this.queue = [];
  }
  enqueue(item: T) {
    this.queue.push(item);
  }
  dequeue(): T | undefined {
    return this.queue.shift();
  }
  peek(): T | undefined {
    return this.queue[0];
  }
  isEmpty(): boolean {
    return this.queue.length === 0;
  }
}

function numberOfSubarrays(nums: number[]): number {
  let a = 0;
  let l = 0;
  let r = 0;

  const m = new Map();

  while (r < nums.length) {
    while (r < nums.length && nums[r] === nums[l]) {
      a = a + r - l + 1;
      if (m.has(nums[l])) {
        //    console.log(m.get(nums[l]))
        a = a + m.get(nums[l]);
      }
      r++;
    }

    for (const k of m) {
      console.log(k[0]);
      if (k[0] < nums[l]) m.delete(k);
    }
    m.set(nums[l], (m.get(nums[l]) || 0) + (r - l));

    l = r;
  }

  return a;
}

console.log(findKthSmallest([3, 6, 9], 3));

function findKthSmallest(coins: number[], k: number): number {
  const mq = new MinPriorityQueue();
  const s = new Set();

  coins.sort((a, b) => a - b);

  for (let i = 0; i < coins.length; i++) {
    const d = Math.ceil(coins[i] / coins[0]);
    const l = Math.ceil(k / d);
    console.log(l, coins[i]);
    for (let x = 0; x <= l; x++) {
      const v = coins[i] * x;
      if (!s.has(v)) {
        mq.enqueue(v);
        s.add(v);
      }
    }
  }

  let r;

  while (k !== -1) {
    r = mq.dequeue();
    k--;
  }

  return r.element;
}
