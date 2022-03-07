/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * 
 * 
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix `prefix`, and false otherwise.

Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:

1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

// LEET, LITTER
{
   "L":{
      "E":{
         "E":{
            "T": {}
         }
      },
      "I": {
          "T": {
              "T": {
                  "E": {
                      "R": {}
                  }
              }
          }
      }
   }
}


 */



var Trie = function () {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.trie;
    for (let character of word) {
        if (!node[character]) {
            node[character] = {};
        }
        node = node[character];
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.trie;
    for (let character of word) {
        if (!node[character]) {
            return false;
        }
        node = node[character];
    }
    return node.isEnd ?? false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.trie;
    for (let character of prefix) {
        if (!node[character]) {
            return false;
        }
        node = node[character];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert("word")
obj.insert("world")
obj.insert("work")
obj.insert("hello")
console.log("work", obj.search("work"));
console.log("wo", obj.search("wo"));
console.log("hell", obj.search("hell"));
console.log("prefix work", obj.startsWith("work"));
console.log("prefix wo", obj.startsWith("wo"));
console.log("prefix hell", obj.startsWith("hell"));
console.log("prefix od", obj.startsWith("od"));
console.log(JSON.stringify(obj));