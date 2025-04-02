// Given a string str containing alphanumeric characters.
// The task is to calculate the sum of all the numbers present in the string.

// Examples:

// Input: s = "1abc23"
// Output: 24
// Explanation: 1 and 23 are numbers in the string which is added to get the sum as 24.

function sumOfNumbersInString(str) {
    let sum = 0, num = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char >= '0' && char <= '9') {
        num = num * 10 + (char - '0');  // Build the number
      } else {
        sum += num;  // Add the number to sum
        num = 0;     // Reset the number
      }
    }
  
    sum += num;  // Add any remaining number at the end
    return sum;
  }
  
  // Example usage
  const inputStr = "abc123xyz45mno78";
  console.log(sumOfNumbersInString(inputStr));  // Output: 246
  



//   function sumOfNumbersInString(str) {
//     let sum = 0;
//     let tempNumber = '';
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
  
//       // Check if the character is a digit
//       if (!isNaN(char) && char !== ' ') {
//         tempNumber += char;  // Build the number string
//       } else {
//         if (tempNumber !== '') {
//           sum += parseInt(tempNumber, 10);  // Convert and add to sum
//           tempNumber = '';  // Reset for next number
//         }
//       }
//     }
  
//     // Add any number left at the end of the string
//     if (tempNumber !== '') {
//       sum += parseInt(tempNumber, 10);
//     }
  
//     return sum;
//   }
  
//   // Example usage
//   const inputStr = "abc123xyz45mno78";
//   console.log(sumOfNumbersInString(inputStr));  // Output: 246
  


// function sumOfNumbersInString(str) {
//     // Use regex to find all sequences of digits in the string
//     const numbers = str.match(/\d+/g);
  
//     // If there are no numbers, return 0
//     if (!numbers) return 0;
  
//     // Convert each string number to an integer and sum them up
//     const sum = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);
  
//     return sum;
//   }
  
//   // Example usage
//   const inputStr = "abc123xyz45mno78";
//   console.log(sumOfNumbersInString(inputStr));  // Output: 246
  