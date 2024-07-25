function isPalindrome(string) {
    for(let i = 0; i < string.length; i++) {
      const j = string.length - 1 - i
      if(string[i] !== string[j]) {
        return false
      }
    }
    return true
}