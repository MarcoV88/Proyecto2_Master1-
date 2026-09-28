function swap(array, indexOne, indexTwo) {
  const temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap(fantasticFour, 0, 3));
console.log(swap(fantasticFour, 1, 2));
