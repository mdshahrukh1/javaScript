let marks = [95, 98, 92, 94, 96];
let n = marks.length;

let total = 500;
let totalobtained = 0;
for(let i = 0; i < n; i++) { //in for we iterate over index.
    totalobtained += marks[i]; //totalobtain = totalobtain + marks[i];
}
console.log("Total Obtain marks - " +totalobtained);

let average = totalobtained/n;
console.log("Average Marks - "+average);

let percentage = (totalobtained/total)*100;
console.log("Percentage Marks - "+percentage);