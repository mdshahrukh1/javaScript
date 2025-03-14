let m = [[1, 0, 2],[3, 4, 5],[7, 8, 9]];

let target = 8;
let r = m.length;
let c = m[0].length;// Columns length = length ogf firat row

for(let i = 0; i < r;i++){
    for(let j = 0; i < c; j++){
        if (m[i][j] = target) {
            console.log("Found " +m[i][j]);
            return;
        }
    }
}

console.log("Not Found");
