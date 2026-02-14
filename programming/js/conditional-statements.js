var age = 10;

if (age >= 65) {
  console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
  console.log("Each moth you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";

switch(day) {
  case "Monday": 
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
  case "Sunday":
    console.log("Do something");
    break; 
  default:
    console.log("There is no such day");
}

var fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("It's a banana.");
  case "apple":
    console.log("It's an apple.");
  case "orange":
    console.log("It's an orange.");
  default:
    console.log("Unknown fruit.");
}