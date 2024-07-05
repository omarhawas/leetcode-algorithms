function sortedSquaredArray(array) {
    let squaredArray = array.map(num => num * num)
    let sortedSquaredArray = squaredArray.sort((a, b) => a - b)
    return sortedSquaredArray
  }