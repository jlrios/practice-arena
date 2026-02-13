var clothes = [];

clothes.push("Wrangler Jeans");
clothes.push("501 Levi's Jeans");
clothes.push("Plaid shirt");
clothes.push("Chelsea boots");
clothes.push("George Strait cowboy hat");

console.log(clothes);

clothes.pop();

clothes.push("Justin boots");

console.log(clothes.length);
console.log(clothes[2]);

var favCar = {};

favCar.color = "Steel blue";
favCar.convertible = false;

console.log(favCar);

var dog = {
  color: "brown",
  height: 30,
  length: 60
};

dog["type"] = "corgi";

console.log(dog);

var greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Ringo"));