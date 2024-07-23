function commonCharacters(strings) {
    if(strings.length === 0) return [];
    let currentString = strings[0];
    for(let i = 1; i < strings.length; i++) {
      currentString = currentString.split('').filter(char => strings[i].includes(char)).join('');
      }
      return [...new Set(currentString.split(''))];
}