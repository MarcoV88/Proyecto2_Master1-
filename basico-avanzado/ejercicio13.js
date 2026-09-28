const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, name) {
  const index = nameList.indexOf(name);
  if (index !== -1) {
    return [true, index];
  }
  return false;
}

console.log(nameFinder(names, "Tony"));
console.log(nameFinder(names, "Marc"));
console.log(nameFinder(names, "Thanos"));
