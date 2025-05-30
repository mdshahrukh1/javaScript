// Validate an IP Address
// You are given a string s in the form of an IPv4 Address. Your task is to validate an IPv4 Address, 
// if it is valid return true otherwise return false.

// IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers,
//  each ranging from 0 to 255, separated by dots, e.g., "172.16.254.1"

// A valid IPv4 Address is of the form x1.x2.x3.x4 where 0 <= (x1, x2, x3, x4) <= 255. Thus, 
// we can write the generalized form of an IPv4 address as (0-255).(0-255).(0-255).(0-255)

// Note: Here we are considering numbers only from 0 to 255 and any additional leading zeroes will be considered invalid.

// Examples :

// Input: s = "222.111.111.111"
// Output: true
// Explanation: Here, the IPv4 address is as per the criteria mentioned and also all four decimal numbers lies in the mentioned range.
// Input: s = "5555..555"
// Output: false
// Explanation: "5555..555" is not a valid. IPv4 address, as the middle two portions are missing.
// Input: s = "0.0.0.255"
// Output: false

function isValidIPv4(s) {
    const parts = s.split(".");

    // Check if there are exactly 4 parts
    if (parts.length !== 4) return false;

    for (let part of parts) {
        // Each part should be a number
        if (!/^\d+$/.test(part)) return false;

        // Convert to number and check range
        let num = Number(part);
        if (num < 0 || num > 255) return false;

        // Check for leading zeros (except for '0' itself)
        if (part.length > 1 && part[0] === "0") return false;
    }

    return true;
}

// Test cases
console.log(isValidIPv4("222.111.111.111")); // true
console.log(isValidIPv4("5555..555")); // false
console.log(isValidIPv4("0.0.0.255")); // false
console.log(isValidIPv4("192.168.1.1")); // true
console.log(isValidIPv4("01.1.1.1")); // false
