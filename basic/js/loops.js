for (var i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Counting completed!");

for (var i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("Countdown finished!");

var c = 1;

while (c <= 5) {
  console.log(c);
  c++;
}

console.log("Counting completed!");

var d = 5;

while (d <= 1) {
  console.log(d);
  d++;
}

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  } else if (i == 2) {
    console.log("Silver medal");
  } else if (i == 3) {
    console.log("Bronze medal")
  } else {
    console.log(i);
  }
}

for (var i = 1; i <= 10; i++) {
  switch(i) {
    case 1:
      console.log("Gold medal");
      break;
    case 2: 
      console.log("Silver medal");
      break;
    case 3:
      console.log("Bronze medal");
      break;
    default:
      console.log(i);
  }
}