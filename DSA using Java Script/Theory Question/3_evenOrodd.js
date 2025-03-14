function findEvenOrOdd(n) {
    for (let i = 0; i < n; i++) {

        if (i === 0) {
            console.log(i +" is Even Number");
        }
        else if (i % 2 === 0) {
            console.log(i +" is Even Number");
        }
        else {
            console.log(i +" is Odd Number");
        }
    }
}

findEvenOrOdd(7);