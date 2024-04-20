import { MinPriorityQueue } from "@datastructures-js/priority-queue";

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
