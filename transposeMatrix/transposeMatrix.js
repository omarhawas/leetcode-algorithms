function transposeMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const transposed = Array.from({ length: numCols }, () => []);
  
      for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
              transposed[j][i] = matrix[i][j];
          }
      }
  
      return transposed;
}


// second solution

function transposeMatrix(matrix) {
    // Write your code here.
    const numRows = matrix.length; 
    const numCols = matrix[0].length;
      
    const transposed = new Array(numCols).fill().map(() => new Array(numRows));
      
      for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
              transposed[j][i] = matrix[i][j];
          }
      }
      return transposed;
}
  