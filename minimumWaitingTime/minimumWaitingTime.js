function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b) 
  
    let totalWaitTime = 0
  
    for (let i = 0; i < queries.length - 1; i++) {
      const duration = queries[i];
      const remainingPeople = queries.length - (i + 1);
      totalWaitTime += duration * remainingPeople;
    }
    return totalWaitTime
}