import {
  MinPriorityQueue,
  PriorityQueue,
} from "@datastructures-js/priority-queue";

// Node class for lnked lst
class lstNode {
  val: number;
  next: lstNode | null;
  constructor(val?: number, next?: lstNode | null) {
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
class TreelnkNode {
  val: number;
  left: TreelnkNode | null;
  right: TreelnkNode | null;
  next: TreelnkNode | null;
  constructor(
    val?: number,
    left?: TreelnkNode | null,
    right?: TreelnkNode | null,
    next?: TreelnkNode | null,
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

console.log(
  (() => {
    return 1;
  })(),
);
