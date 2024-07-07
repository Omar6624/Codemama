var maximumPoints = function (enemyEnergies, currentEnergy) {
  let marked = new Array(enemyEnergies.length).fill(false);

  let point = 0;
  while (marked.includes(false)) {
    for (let i = 0; i < enemyEnergies.length; i++) {
      if (currentEnergy >= enemyEnergies[i] && marked[i] === false) {
        currentEnergy = currentEnergy - enemyEnergies[i];
        point++;
      } else if (enemyEnergies[i] > currentEnergy && point > 0) {
        marked[i] = true;
        currentEnergy = currentEnergy + enemyEnergies[i];
      }
    }
  }

  return point;
};
console.log(maximumPoints([3, 2, 2], 2));
