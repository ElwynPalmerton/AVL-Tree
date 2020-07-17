function Node(value) {
  this.value = value;
  this.parent = null;
  this.depth = 1;
  this.balance = null;
  this.left = null;
  this.right = null;
}


Node.prototype.addNode = function (node) {

  if (node.value < this.value) {
    if (this.left === null) {
      this.left = node;
      this.left.parent = this;
    } else {
      this.left.addNode(node);
    }
  } else {
    if (this.right === null) {
      this.right = node;
      this.right.parent = this;
    } else {
      this.right.addNode(node);
    }
  }
}

Node.prototype.visit = function () {
  if (this.left !== null) {
    this.left.visit();
  }
  console.log(this.value);
  if (this.right !== null) {
    this.right.visit();
  }
}

Node.prototype.search = function (val) {
  if (this.value === val) {

    return this;
  }

  if (val < this.value) {
    if (this.left !== null) {
      return this.left.search(val);
    }
  } else {
    if (this.right !== null) {
      return this.right.search(val);
    }
  }

  return -1

}