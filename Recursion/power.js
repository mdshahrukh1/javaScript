// You are given two numbers n and p. You need to find np.

// Example 1:

// Input:
// n = 9 p = 9 
// Output: 387420489
// Explanation: 387420489 is the value 
// obtained when 9 is raised to the 
// power of 9.


function RecursivePower(n, p)
    {
        // code here
        if(p === 0){
            return 1;
        }
        return n * RecursivePower(n, p-1);
    }