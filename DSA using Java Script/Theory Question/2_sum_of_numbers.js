function numSums(num) {
    while (i <= num) { // total = n*(n+1)/2;
        sum += i;
        i++;
    }
  return sum;  
}


let sum = 0;
let i = 1;
let ans = numSums(10);
console.log(ans);

// let sum = 0;
// marks.forEach(i => sum += i);
// console.log(sum);