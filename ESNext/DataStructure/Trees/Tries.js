class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isEnd = false;
  }
}
/**
 * Tree-like structures, whose node stores letters of alphabets in the form of characters
 * Used in autocomplete/autocorrect
 *
 */
class Tries {
  constructor() {
    this.root = new Node(null);
  }
  /**
   * Inserts a word into the trie
   * @param {string} word
   */
  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new Node(char);
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }
  /**
   * Checks if the word is present in the trie
   * @param {string} word
   */
  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current && current.isEnd;
  }
  /**
   * Returns all the words in the trie that start with the given prefix
   * @param {string} prefix
   */
  getWordsWithPrefix(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return [];
      }
      current = current.children[char];
    }
    const words = [];
    this.traverse(current, words, prefix);
    return words;
  }
}

const trie = new Tries();
trie.insert('hello');
trie.insert('hell');
trie.insert('he');
trie.insert('hel');
trie.insert('helo');
trie.insert('hels');
trie.insert('help');
trie.insert('helps');
trie.insert('helping');
trie.insert('helped');
trie.insert('helped');
trie.insert('helping');
trie.insert('helped');
trie.insert('helping');
console.log(trie.getWordsWithPrefix('hel'));
console.log(trie.getWordsWithPrefix('helped'));
