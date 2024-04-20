class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let current = this.root;
    for (const c of word) {
      if (!current.children.has(c)) {
        current.children.set(c, new TrieNode());
      }
      current = current.children.get(c);
    }
    current.isEnd = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (const c of word) {
      if (!current.children.has(c)) {
        return false;
      }
      current = current.children.get(c);
    }
    return current.isEnd;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;
    for (const c of prefix) {
      if (!current.children.has(c)) {
        return false;
      }
      current = current.children.get(c);
    }
    return true;
  }
}

class TrieNode {
  children = new Map();
  isEnd = false;
}
