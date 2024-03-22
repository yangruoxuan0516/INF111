class Queue<T> {
  queue: T[]=[];
  length: number = 0;

  enqueue(element: T): void {
    this.length = this.queue.push(element);
  }

  dequeue(): T | undefined {
    this.length--;
    return this.queue.shift();
  }

  size(): number {
    return Math.max(0,this.length);
  }
}

let numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
console.log(numberQueue.dequeue()); // Affiche 1
console.log(numberQueue.dequeue()); // Affiche 2
console.log(numberQueue.dequeue()); // Affiche 3
console.log(numberQueue.dequeue()); // Affiche undefined
console.log(numberQueue.size()); // Affiche 0

let stringQueue = new Queue<string>();
stringQueue.enqueue("un");
stringQueue.enqueue("deux");
stringQueue.enqueue("trois");
console.log(stringQueue.dequeue()); // Affiche "un"
console.log(stringQueue.size()); // Affiche 2