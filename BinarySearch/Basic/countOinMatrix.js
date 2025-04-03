// Given a N X N binary Square Matrix where each row and column of the matrix is sorted in ascending order. 
// Find the total number of zeros present in the matrix.

// Example 1:

// Input:
// N = 3
// A = {{0, 0, 0},
//      {0, 0, 1},
//      {0, 1, 1}}
// Output: 6
// Explanation: 
// The first, second and third row contains 3, 2 and 1
// zeroes respectively.

function scountZeros(A,N){
    //code here
    let count = 0;
    let M = A[0].length;
    
    for(let i = 0; i < N; i++){
        for(let j = 0; j < M; j++){
            if(A[i][j] === 0){
                count++;
            }
        }
    }
    return count;
}