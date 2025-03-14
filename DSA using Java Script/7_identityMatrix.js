let M = [[1, 0, 0],[0, 1, 0],[0, 0, 1]];

let r = M.length;
let c = M[0].length; // Coloumns = length of first row

for(let i = 0; i < r; i++){
    for(let j = 0; j < c; j++){
        if(j == i && M[i][j] != 1){ //if main diagonal element's value is not 1, then it is not an Identity Matrix
            console.log("Not an Identity Matrix");
            return;
        }
        else if(i !=j && M[i][j] != 0){ //if Non-diagonal element's value is not 0, then it is not an Identity Matrix
            console.log("Not an Identity Matrix");
            return;
        }
    }
}
console.log("Identity Matrix");