// Given variables
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian pizza", price: 6.45 },
];
const tax = 1.20;

function getPrices(taxBoolean) {
  let result = "";

  for (const item of dishData) {
    let finalPrice;

    if (taxBoolean === true) {
      finalPrice = item.price * tax;
    } else if (taxBoolean === false) {
      finalPrice = item.price;
    } else {
      return "You need to pass a boolean to the getPrices call!";
    }

    finalPrice = finalPrice.toFixed(2);

    result += `Dish: ${item.name} Price: $${finalPrice}\n`;

    console.log(result.trim());
  }

  return result.trim();
}


// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

getDiscount(true, 2);