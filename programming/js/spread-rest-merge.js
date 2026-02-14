// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
  for (let i = 0; i <= args.length - 1; i++) {
    console.log(args[i]);
  }
}

unknownArgs("a", "b", "c", "d");
unknownArgs("John", "Paul", "George", "Ringo");
unknownArgs(1, 2, 3, 4, 5.5);

function count(...food) {
  console.log(food.length)
}

count("Burgers", "Fries", null);