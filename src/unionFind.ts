const parentU = Array(10).fill(0);

for (let i = 0; i < 10; i++) {
  parentU[i] = i;
}

const rank = Array(10).fill(0);

const size = Array(10).fill(1);

function union(i: number, j: number) {
  const irep = find(i);
  const jrep = find(j);

  if (irep === jrep) {
    return false;
  }

  parentU[irep] = jrep;
  return true;
}

function find(i: number) {
  if (parentU[i] == i) {
    return i;
  } else {
    const result = find(parentU[i]);
    parentU[i] = result;
    return result;
  }
}

function unionByRank(x: number, y: number) {
  let xset = find(x);
  let yset = find(y);

  if (xset === yset) return;

  if (rank[xset] < rank[yset]) {
    parentU[xset] = yset;
  } else if (rank[xset] > rank[yset]) {
    parentU[yset] = xset;
  } else {
    parentU[yset] = xset;
    rank[xset] = rank[xset] + 1;
  }
}

function unionBySize(i: number, j: number) {
  let irep = find(i);
  let jrep = find(j);

  if (irep === jrep) {
    return;
  }

  let isize = size[irep];
  let jsize = size[jrep];

  if (isize < jsize) {
    parent[irep] = jrep;
    size[jrep] += size[irep];
  } else {
    parent[jrep] = irep;
    size[irep] += size[jrep];
    if (isize === jsize) {
      rank[irep]++;
    }
  }
}
