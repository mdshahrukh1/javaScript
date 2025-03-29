function findEquilibrium(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum -= arr[i]; // Right sum after removing current element

        if (leftSum === totalSum) {
            return i; // Equilibrium index found
        }

        leftSum += arr[i]; // Add current element to left sum
    }

    return -1; // No equilibrium index found
}

// Example cases
console.log(findEquilibrium([1, 2, 0, 3])); // Output: 2
console.log(findEquilibrium([1, 1, 1, 1])); // Output: -1
