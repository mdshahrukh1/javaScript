let arr = [[1, 2],[4, 5],[7, 8]];
console.log(`No of Rows  ${arr.length}`); // No of Rows
console.log(`No of Columns  ${arr[0].length}`); // No of Columns

for (let i = 0; i < arr.length; i++) {  //i < 3
    for (let j = 0; j < arr[0].length; j++) {//j <3
        console.log(arr[i][j]);
    }    
}

/*
Matrix form of this array
 1 2 
 4 5  
 7 8 

*/