function isValidSubsequence(array, sequence) {
    let seqIndex = 0;
  
    for (let value of array) {
      if (sequence[seqIndex] === value) {
        seqIndex++;
      }
    }
    return seqIndex === sequence.length;
  }