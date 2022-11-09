/*
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function outLier(integers) {
  const even = [];
  const odds = [];

  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? even.push(integers[i]) : odds.push(integers[i]);
  }

  
  return even.length > odds.length ? odds[0] : even[0];
}

console.log("Even number", outLier([160, 3, 1719, 19, 11, 13, -21]));
console.log("Odds number", outLier([2, 4, 0, 100, 4, 11, 2602, 36]));
