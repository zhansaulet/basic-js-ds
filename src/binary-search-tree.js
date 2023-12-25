const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.treeRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    }

    let currentNode = this.treeRoot;
    while (currentNode) {
      if (data === currentNode.data) return undefined;
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    //if tree is empty
    if (this.treeRoot === null) return false;

    // if tree has values
    let currentNode = this.treeRoot;
    let hasData = false;
    while (currentNode && !hasData) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        hasData = true;
      }

    }
    return hasData;
  }

  find(data) {
    if (this.treeRoot === null) return false;

    let currentNode = this.treeRoot;
    let hasData = false;
    while (currentNode && !hasData) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        hasData = currentNode;
      }

    }

    if (!hasData) return null;
    return hasData;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');

    const removeNode = (node, data) => {
      if (this.treeRoot === null) {
        return null;
      }

      if (data === node.data) { // if the node data and data to remove are equal
        if (node.left === null && node.right === null) { // deleting a node without a child
          node = null;
          return node;
        } else if (node.left === null) { // deleting a node with one child
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        } else {
          const removedNode = this.findMinNode(node.right);
          node.data = removedNode.data;

          node.right = removeNode(node.right, removedNode.data);
          return node;
        }
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.treeRoot, data);
  }

  findMinNode(node) {
    if (node === null) return null;

    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (this.rootNode === null) return null;

    let currentNode = this.treeRoot;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return (currentNode.data);
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (this.rootNode === null) return null;

    let currentNode = this.treeRoot;

    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return (currentNode.data);
  }
}

module.exports = {
  BinarySearchTree
};