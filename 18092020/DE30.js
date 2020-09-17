/*var n = prompt("enter value", "0");

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

document.write(isPrime(n));
*/

// Ovenstående fungerer perfect :D

var n = prompt("enter value", "0");
var start = Date.now();
function isPrime(n) {
  if (n === 1) {
    return true;
  } else if (n === 2) {
    return false;
  } else {
    for (var x = 3; x < n; n++) {
      if (n % x === 0) {
        return true;
      }
    }
    return false;
  }
}

document.write(isPrime(n));
console.log("Page load took " + (Date.now() - start) + "milliseconds");
