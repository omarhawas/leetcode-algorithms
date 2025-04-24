function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
  
    const firstRed = redShirtHeights[0];
    const firstBlue = blueShirtHeights[0];
  
    const backRow = firstRed > firstBlue ? redShirtHeights : blueShirtHeights;
    const frontRow = backRow === redShirtHeights ? blueShirtHeights : redShirtHeights;
  
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (backRow[i] <= frontRow[i]) {
        return false;
      }
    }
    return true;
}