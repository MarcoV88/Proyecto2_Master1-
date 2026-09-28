function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

console.log(rollDice(6));
console.log(rollDice(20));
console.log(rollDice(100));
