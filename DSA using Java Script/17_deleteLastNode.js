class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    } 
}

class LinkedList{
    constructor(){
        this.head = null;
    }

//Method to add a node to the end of the list
    append(data){
        let newnode = new Node(data);

        if (this.head == null) {
            this.head = newnode;
        } else {
            let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        //now curr is last node
        curr.next = newnode;            
        }   
    }

    
//Method to delete the last Node
delete(){
    if (this.head == null) {
        console.log("List is empty, Cannot delete Node");
    }
    else if(this.head.next == null){
        this.head = null;
        console.log("Last Node Deleted, List is empty Now");
    }
    let curr = this.head;
    while (curr.next.next != null) {
        curr = curr.next;
    }
//now curr is at second last node : secondLast -> null
    curr.next = null;
}

    //method for printing the linked List
    printList(){
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

let LL = new LinkedList();
LL.append(1);
LL.append(2);
LL.append(3);
LL.append(4);
LL.printList();
LL.delete();
LL.printList();

