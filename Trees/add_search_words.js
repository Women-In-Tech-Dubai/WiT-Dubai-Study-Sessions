/**
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * 
 *  Design a data structure that supports adding new words and finding if a string matches any previously added string.

    Implement the WordDictionary class:

    WordDictionary() Initializes the object.
    void addWord(word) Adds word to the data structure, it can be matched later.
    bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
    

    Example:

    Input
    ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
    [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]

    Output
    [null,null,null,null,false,true,true,true]

    Explanation
    WordDictionary wordDictionary = new WordDictionary();
    wordDictionary.addWord("bad");
    wordDictionary.addWord("dad");
    wordDictionary.addWord("mad");
    wordDictionary.search("pad"); // return False
    wordDictionary.search("bad"); // return True
    wordDictionary.search(".ad"); // return True
    wordDictionary.search("b.."); // return True
    

    Constraints:

    1 <= word.length <= 25
    word in addWord consists of lowercase English letters.
    word in search consist of '.' or lowercase English letters.
    There will be at most 3 dots in word for search queries.
    At most 10^4 calls will be made to addWord and search.

 */



var WordDictionary = function() {
    this.trie = {};
};

// CODE, CODING
// SearchTerm: COD.NG
/*

{
"C": {
   "O": {
      "D": {
         "E": {},
         "I": {
            "N": {
               "G": {}
            }
         }
      }
   }
}
            
}
*/

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for(let character of word) {
       if(!node[character]) {
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
WordDictionary.prototype.search = function(word) {
   return helper(word, this.trie, 0);
};

function helper(word, node, i)
{
    console.log('entering helper', i, node)
   // Base 1: We've found the word!
   if (node.isEnd && i == word.length) {
      return true;
   }

   // Base 2: We've exceeded the word length
   if (i >= word.length) {
    console.log('returning false base case')
      return false;
   }

   // if the current index is a wildcard
    if (word[i+1] == '.') {
        console.log('found wildcard')
       for(let child of Object.values(node[word[i]])) {
          if (helper(word, child, i+1)) {
             return true;
          }
       }
       console.log('returning false')
       return false;
    } else if (node[word[i]] == '.') {
        for(let child of Object.values(node[word[i]])) {
            if (helper(word, child, i+1)) {
               return true;
            }
         }
         console.log('returning false')
         return false;
    } else if (!node[word[i]]) {
       console.log('word[i]', word[i])
       return false;
    }

    return helper(word, node[word[i]], i+1);
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
 var obj = new WordDictionary()
 obj.addWord("bid")
 obj.addWord("dad")
 obj.addWord("mad")
//  console.log("pad", obj.search("pad"));
//  console.log("bid", obj.search("bid"));
//  console.log(".ad", obj.search(".ad"));
 console.log("b.d", obj.search("b.d"));
 console.log(JSON.stringify(obj));