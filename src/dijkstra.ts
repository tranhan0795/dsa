import {
  MinPriorityQueue,
  PriorityQueue,
} from "@datastructures-js/priority-queue";

function networkDelayTime(times: number[][], n: number, k: number): number {
  const graph = new Map();
  const visited = new Set();
  const minQueue = new MinPriorityQueue({ priority: (a: number[]) => a[1] });
  minQueue.enqueue([k, 0]);
  let time = 0;

  for (let i = 0; i < times.length; i++) {
    if (graph.has(times[i][0])) {
      graph.get(times[i][0]).push([times[i][1], times[i][2]]);
    } else {
      graph.set(times[i][0], [[times[i][1], times[i][2]]]);
    }
  }

  while (minQueue.size()) {
    const [curNode, distance] = minQueue.dequeue().element;

    if (visited.has(curNode)) continue;
    visited.add(curNode);
    time = distance;

    const neighbors = graph.get(curNode);
    if (!neighbors) continue;
    for (const [neighbor, distance] of neighbors) {
      if (!visited.has(neighbor)) {
        minQueue.enqueue([neighbor, distance + time]);
      }
    }
  }

  return visited.size === n ? time : -1;
}

function findAnswer(n: number, edges: number[][]): boolean[] {
  const g = {};
  for (let i = 0; i < n; i++) {
    g[i] = [];
  }
  for (const e of edges) {
    g[e[0]].push([e[1], e[2]]);
    g[e[1]].push([e[0], e[2]]);
  }

  const dj = (node) => {
    const arr = Array(n).fill(-1);
    const visited = new Set();
    //@ts-ignore
    const mq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    mq.enqueue([node, 0]);
    while (mq.size()) {
      const [curNode, curDistance] = mq.dequeue();
      if (visited.has(curNode)) continue;
      visited.add(curNode);
      arr[curNode] = curDistance;

      const neighbors = g[curNode];
      for (const [neighbor, distance] of neighbors) {
        if (!visited.has(neighbor)) {
          mq.enqueue([neighbor, curDistance + distance]);
        }
      }
    }

    return arr;
  };

  const a = dj(0); // min path from 0 to other nodes
  const b = dj(n - 1); // min path from n-1 to other nodes;
  const min = a[n - 1];
  console.log(a, b, a[n - 1]);
  const result = Array(edges.length).fill(false);
  for (let i = 0; i < edges.length; i++) {
    //check if connected
    if (
      a[edges[i][0]] === -1 ||
      a[edges[i][1]] === -1 ||
      b[edges[i][0]] === -1 ||
      b[edges[i][1]] === -1
    )
      continue;

    // true if smallest from 0 to e[0] or e[1] +  smallest from n-1 to e[1] or e[0]
    //+ e[2] === min
    if (
      a[edges[i][0]] + b[edges[i][1]] + edges[i][2] === min ||
      b[edges[i][0]] + a[edges[i][1]] + edges[i][2] === min
    ) {
      result[i] = true;
    }
  }

  return result;
}
