console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()


function numPointsScored(playerName) {
  let game = gameObject();

  for (let gameKey in game) {
    let teamObj = game[gameKey];

    for (let teamKey in teamObj) {
      if (teamKey === "players") {
        let players = teamObj[teamKey];

        for (let name in players) {
          if (name === playerName) {
            debugger; 
            return players[name].points;
          }
        }
      }
    }
  }
  return null; // If player is not found
}


console.log(numPointsScored("Alan Anderson")); 
console.log(numPointsScored("Jeff Adrien")); 
