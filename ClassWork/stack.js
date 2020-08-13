class Stack {
    constructor() {
        this.items= [];
    }
    
    push(item) {
        return this.items.push(item);
    }
    
    pop() {
        return this.items.pop();
    }
}

mystack = new Stack();
console.log(mystack.push(10));
console.log(mystack.push(20));
console.log(mystack.pop(20));

