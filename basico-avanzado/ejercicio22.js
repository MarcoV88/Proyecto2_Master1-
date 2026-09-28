const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const availableFruits = [...fruits];

for (const food of foodSchedule) {
  if (!food.isVegan) {
    food.name = availableFruits.shift();
    food.isVegan = true;
  }
}

console.log(foodSchedule);
