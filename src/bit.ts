const num = parseInt("01001011", 2);
const s = num.toString(2);

function binaryToDecimal(binaryNumber: string): number {
  let decimalNumber = 0;

  // Iterate over each binary digit from right to left
  for (let i = binaryNumber.length - 1, j = 0; i >= 0; i--, j++) {
    // Convert binary digit to decimal and add it to the result
    if (binaryNumber[i] === "1") {
      decimalNumber += Math.pow(2, j);
    }
  }

  return decimalNumber;
}

function decimalToBinary(decimalNumber: number): string {
  if (decimalNumber === 0) {
    return "0";
  }

  let binaryString = "";
  let quotient = decimalNumber;

  while (quotient > 0) {
    const remainder = quotient % 2; // Get the remainder when dividing by 2
    binaryString = remainder.toString() + binaryString; // Add the remainder to the beginning of the string
    quotient = Math.floor(quotient / 2); // Update the quotient for the next iteration
  }

  return binaryString;
}

//convert number base 10 to other base (base 26 in this example)
function convertToTitle(columnNumber: number): string {
  let result = "";

  while (columnNumber > 0) {
    //using base 26 => minus 1 to convert to 0-25 range
    const num = (columnNumber - 1) % 26;
    result = String.fromCharCode(num + 65) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
}
