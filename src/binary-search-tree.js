const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  // constructor() {
  //   this.root = null;
  // }

  root() {
    // throw new NotImplementedError('Not implemented');
    if (this.root === null) {
      return null;
    }

    //if (this.root !== null) return this.root;
    return this.root.data;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    if (data > currentNode.data) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return this;
      } else {
        currentNode = currentNode.right;
      }
    } else if (data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return this;
      } else {
        currentNode = currentNode.left;
      }
    } else if (data === currentNode.data) {
      return undefined;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    let currentNode = this.root;

    if (data === currentNode.data) {
      return true;
    } else if (data > currentNode.data) {
      if (data === currentNode.next) return true;
      if (data > currentNode) {
        currentNode = currentNode.next;
        has(currentNode);
      }
    } else if (data < currentNode.data) {
      if (data === currentNode.left) return true;
      if (data < currentNode) {
        currentNode = currentNode.left;
        has(currentNode);
      }

      return false;
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};