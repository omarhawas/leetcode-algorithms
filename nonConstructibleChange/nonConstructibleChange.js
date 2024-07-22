function nonConstructibleChange(coins) {
    coins.sort((a,b) => {return a - b})
    let change = 0
    for(let i = 0; i < coins.length; i++) {
      if(coins[i] > change + 1) break
      change += coins[i]
    }
    return change + 1
  }