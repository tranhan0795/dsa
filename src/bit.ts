const num = parseInt("01001011", 2);
const a = 101010011010101;
const num1 = BigInt(`0b${a}`);
const s = num.toString(2);

//count total of 1 bit
const check = (n) => {
  const s = n.toString(2);
  let count = 0;
  while (n) {
    if (n % 2 === 1) count++;
    n = n >> 1;
  }

  // while (n) {
  //   n &= n - 1;
  //   count++;
  // }

  return count;
};

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

// XOR Properties
// Self-Inverse Property
// [ a ^ a = 0 ]
// Any number XOR-ed with itself results in zero.

// Identity Property
// [ a ^ 0 = a ]
// Any number XOR-ed with zero remains unchanged.

// Commutative Property
// [ a ^ b = b ^ a ]
// The order of the operands does not matter in XOR.

// Associative Property
// [ a ^ (b ^ c) = (a ^ b) ^ c ]
// XOR operations can be grouped in any order.

// Inversion Property
// If [ c = a ^ b ], then [ a = b ^ c ] and [ b = a ^ c ].
