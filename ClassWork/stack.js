class Stack {
    constructor() {
        this.items= [];
        this.top= 0;
    }
    
    push(item) {
        return this.items.push(item);
    }
    
    pop() {
        return this.items.pop();
    }
}

mystack = new Stack();

//Pushing Items
mystack.push(10);
mystack.push(20);
mystack.push(30);
mystack.push(40);

//Popping Items
mystack.pop(20);
console.log(mystack.items)

