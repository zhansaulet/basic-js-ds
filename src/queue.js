const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');

  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    if (this.value === null) {
      this.value = value;
    }

    let current = this.next;

    if (current === null) {
      current.value = value;
    } else {
      current = current.next;
    }
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    if (this.value === null) return undefined;

    if (this.next !== null) {
      this.value = this.next;
      return 1;
    } else {
      this.value = null;
      return 1;
    }
  }
}

module.exports = {
  Queue
};
