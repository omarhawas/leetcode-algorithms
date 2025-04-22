function tournamentWinner(competitions, results) {
    const scores = {}
    let bestTeam = ""
    scores[bestTeam] = 0

  for (let i = 0; i < competitions.length; i++) {
    const match = competitions[i]
    const result = results[i]

    const home = match[0]
    const away = match[1]

    // if 
    const winner = result === 1 ? home : away

    // if winner not in scores yet, add them with 0 points
    if (!scores[winner]) {
      scores[winner] = 0
    }

    // give 3 points for the win
    scores[winner] += 3

    // check which team is the winner
    if (scores[winner] > scores[bestTeam]) {
      bestTeam = winner
    }
  }

  return bestTeam
}