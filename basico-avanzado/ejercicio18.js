const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const idsToRemove = [11, 40];
const remainingPlaces = [];

for (let i = 0; i < placesToTravel.length; i++) {
  if (!idsToRemove.includes(placesToTravel[i].id)) {
    remainingPlaces.push(placesToTravel[i]);
  }
}

console.log(remainingPlaces);
