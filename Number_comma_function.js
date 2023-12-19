//function to insert commas into numbers in accordance with convention.

function formatNumber(number) {
  const numberString = number.toString();
  let numberArray = numberString.split("");
  function insertComma(array) {
    for (let i = array.length - 3; i >= 1; i -= 3) {
      array.splice(i, 0, ",");
    }
    return array;
  }
  return insertComma(numberArray).join("");
}

console.log(formatNumber(1234));
//console.log(123);
//console.log(123456);


