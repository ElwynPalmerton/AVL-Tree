Tree.prototype.assignBalance = function () {
  //Balance = left minus right;
  //If right or left are null they are assigned a value of zero for this calculation.

  let leftDepth = this.head.left ? this.head.left.depth : 0;
  let rightDepth = this.head.right ? this.head.right.depth : 0;


  this.head.balance = leftDepth - rightDepth;

  if (this.head.left !== null) {
    this.head.left.assignBalance();
  }

  if (this.head.right !== null) {
    this.head.right.assignBalance();
  }
}


Node.prototype.assignBalance = function () {

  let leftDepth = this.left ? this.left.depth : 0;
  let rightDepth = this.right ? this.right.depth : 0;

  this.balance = leftDepth - rightDepth;

  if (this.left !== null) {
    this.left.assignBalance();
  }

  if (this.right !== null) {
    this.right.assignBalance();
  }
}