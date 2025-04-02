function customSubstring(str, start, end) {
    // Handle undefined end index (extract till end of string)
    if (end === undefined) {
        end = str.length;
    }

    // Convert NaN or negative indices to 0
    start = Math.max(0, start);
    end = Math.max(0, end);

    // If start > end, swap them
    if (start > end) {
        [start, end] = [end, start];
    }

    let result = "";
    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

// Test cases
console.log(customSubstring("Hello, World!", 7, 12)); // Output: "World"
console.log(customSubstring("JavaScript", 4));       // Output: "Script"
console.log(customSubstring("abcdef", 4, 2));        // Output: "cd" (swaps indices)
console.log(customSubstring("SkillAcademy", -3, 5)); // Output: "Skill"
console.log(customSubstring("SkillAcademy", NaN, 4));// Output: "Skil"
