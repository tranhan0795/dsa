function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const g: any = {};
  const result: any = [];

  for (let i = 0; i < numCourses; i++) {
    g[i] = [];
  }

  for (const p of prerequisites) {
    g[p[0]].push(p[1]);
  }

  const v = new Set();

  const dfs = (c: string, used) => {
    if (v.has(parseInt(c))) return true;
    if (used.has(c)) return false;
    used.add(c);
    const a = g[c];

    for (const c1 of a) {
      if (!dfs(c1, used)) return false;
    }

    v.add(parseInt(c));
    result.push(c);

    return true;
  };

  for (const c of Object.keys(g)) {
    const used = new Set();
    if (!dfs(c, used)) return [];
  }

  return result;
}
