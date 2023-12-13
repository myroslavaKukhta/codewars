// Your task is to sum the differences between consecutive pairs in the array in descending order.

function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);

  let sumDiff = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i] - arr[i + 1];
    sumDiff += diff;
  }

  return sumDiff;
}

// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)
function duckDuckGoose(players, goose) {

  if (goose < 1) {
    return "Invalid goose";
  }

  const chosenPlayer = (goose - 1) % players.length;

  return players[chosenPlayer].name;
}