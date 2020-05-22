console.log("Assignment 1");

function INT(x, y) {
  if ((x >= 10 && x <= 20) || (y >= 10 && y <= 20)) {
    return true;
  } else {
    return false;
  }
}

console.log(INT(22, 99));
console.log(INT(21, 12));
console.log(INT(8, 99));

console.log("Assignment 2");

function valueOF(x, y) {
  if (
    (x >= 30 && x <= 40 && y >= 30 && y <= 40) ||
    (x >= 40 && x <= 50 && y >= 40 && y <= 50)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(valueOF(30, 31));
console.log(valueOF(30, 41));
console.log(valueOF(40, 50));

console.log("Assignment 3");

function value(x, y) {
  if (x % 10 === y % 10) {
    return true;
  } else {
    return false;
  }
}
console.log(value(7, 17));
console.log(value(6, 17));
console.log(value(3, 113));

//switch statement
let browser = "Opera";
switch (browser) {
  case "Opera":
    console.log("It is not supported");

    break;

  case "chrome":
  case "Edge":
  case "firefox":
  case "safari":
    console.log("It is supported browser");

    break;
  default:
    console.log("Error :Browser not identified");
}

let webA = "chrome";
let webB = "firefox";
let webC = "opera";
let webD = "IE";
let web = "opera";
if (web === webA) {
  alert("browser is Working Fine");
  console.log("browser is working Fine");
} else if (web === webB) {
  console.log("change Browser");
} else if (web === webC) {
  console.log("change default browser");
} else if (web === webD) {
  console.log("Not a good browser");
} else {
  console.log("Browser not supported");
}
