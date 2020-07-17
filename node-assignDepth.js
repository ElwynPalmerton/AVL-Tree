Tree.prototype.assignDepth = function () {

  this.head.depth = this.head.calculateDepth();

  if (this.head.right !== null) {
    this.head.right.assignDepth();
  }

  if (this.head.left !== null) {
    this.head.left.assignDepth();
  }
}


Node.prototype.assignDepth = function () {

  this.depth = this.calculateDepth();

  if (this.left !== null) {
    this.left.assignDepth();
  }

  if (this.right !== null) {
    this.right.assignDepth();
  }
}