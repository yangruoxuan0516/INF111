class Queue {
    constructor() {
        this.queue = [];
        this.length = 0;
    }
    enqueue(element) {
        this.length = this.queue.push(element);
    }
    dequeue() {
        this.length--;
        return this.queue.shift();
    }
    size() {
        return Math.max(0, this.length);
    }
}
let numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
console.log(numberQueue.dequeue()); // Affiche 1
console.log(numberQueue.dequeue()); // Affiche 2
console.log(numberQueue.dequeue()); // Affiche 3
console.log(numberQueue.dequeue()); // Affiche undefined
console.log(numberQueue.size()); // Affiche 0
let stringQueue = new Queue();
stringQueue.enqueue("un");
stringQueue.enqueue("deux");
stringQueue.enqueue("trois");
console.log(stringQueue.dequeue()); // Affiche "un"
console.log(stringQueue.size()); // Affiche 2
//# sourceMappingURL=app.js.map