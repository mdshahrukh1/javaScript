var timeRequiredToBuy = function (tickets, k) {
    let q = [];
    let n = tickets.length
    let time = 0;
    //add everyone to queue
    for (let i = 0; i < n; i++) {
        q.push(i);
    }

    //keep giving tickets until kth person does not get all his tickets
    while (tickets[k] != 0) {
        let person = q.shift(); //first person in q
        tickets[person]--; //one ticket given to person
        time++; //time +1 second

        //if person is k and ticket requirement is 0 , break 
        if (person == k && tickets[k] == 0) {
            break;
        }
        
        //if ticket requirement of that person is > 0 , put him back to queue
        if (tickets[person] > 0) {
            q.push(person)
        }

    }
    return time;

};

let tickets = [2, 3, 2];
let k = 2;
console.log(timeRequiredToBuy(tickets, k));
