function semordnilap(words) {
    const wordsSeen = {};
    const result = [];
  
    // Track all words in wordsSeen object
    for (let i = 0; i < words.length; i++) {
      wordsSeen[words[i]] = true;
    }
  
    // Check for semordnilap pairs
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let reversedWord = word.split("").reverse().join("");
      if (reversedWord in wordsSeen && reversedWord !== word) {
        result.push([word, reversedWord]);
        // Remove the words from wordsSeen to avoid duplicates
        delete wordsSeen[word];
        delete wordsSeen[reversedWord];
      }
    }
    return result;
}
  