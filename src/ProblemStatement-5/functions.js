// Question - 1
function toCase(str) {
  const lowerCase = str.toLowerCase();
  const upperCase = str.toUpperCase();
  return `${lowerCase}-${upperCase}`;
}

console.log(toCase('Mthatha'));

// Question - 2
function firstChar(str) {
  for (let char of str) {
    if (char !== ' ') {
      return char;
    }
  }
  return '';
}

console.log(firstChar(" Rosa Parks "));
console.log(firstChar("  Hello World"));
console.log(firstChar("     "));


// Question - 3
function rotate(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const firstElement = arr.shift();
  arr.push(firstElement);

  return arr;
}

console.log(rotate(["a", "b", "c"]));
console.log(rotate([1, 2, 3, 4, 5]));


