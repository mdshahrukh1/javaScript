// Given a string s, convert the first letter of each word in the string to uppercase. 

// Examples:

// Input: s = "gEEKs"
// Output: "Geeks"



function capitalizeFirstLetterOfEachWord(s) {
    s = s.toLowerCase(); // Convert the entire string to lowercase
    let result = '';
    let capitalizeNext = true; // Flag to determine when to capitalize
  
    for (let i = 0; i < s.length; i++) {
      if (capitalizeNext && s[i] !== ' ') {
        result += s[i].toUpperCase(); // Capitalize the first letter
        capitalizeNext = false;
      } else {
        result += s[i]; // Add the rest of the letters as is
      }
  
      if (s[i] === ' ') {
        capitalizeNext = true; // Set flag to capitalize the next word
      }
    }
  
    return result;
  }
  
  // Example usage:
  const input = "gEEKs";
  const output = capitalizeFirstLetterOfEachWord(input);
  console.log(output); // Output: "Geeks"



//   function capitalizeFirstLetter(s) {
//     s = s.toLowerCase(); // Convert entire string to lowercase
//     return s[0].toUpperCase() + s.slice(1); // Capitalize first letter and add the rest
//   }
  
//   // Example usage:
//   const input = "gEEKs";
//   const output = capitalizeFirstLetter(input);
//   console.log(output); // Output: "Geeks"
  
  