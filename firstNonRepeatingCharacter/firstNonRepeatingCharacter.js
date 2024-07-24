function firstNonRepeatingCharacter(string) {
    const charCount = {};
    
    for (let char of string) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (let i = 0; i < string.length; i++) {
      if (charCount[string[i]] === 1) {
        return i;
      }
    }
    return -1
}
  