Tree.prototype.maxDepth = function () {
  if (this.head === null) return 0;
  let max = this.head.calculateDepth();
  return max;
}

Node.prototype.calculateDepth = function () {
  let maxDepth = 0;
  let maxDepthLeft;
  let maxDepthRight;

  //console.log(this);

  if (this.right === null && this.left === null) {
    return 1;
  }

  if (this.left !== null) {
    maxDepthLeft = this.left.calculateDepth();
  } else {
    maxDepthLeft = 1;
  }

  if (this.right !== null) {
    maxDepthRight = this.right.calculateDepth();
  } else {
    maxDepthRight = 1;
  }

  if (maxDepthLeft >= maxDepthRight) {
    maxDepth = maxDepthLeft + 1;
  } else {
    maxDepth = maxDepthRight + 1;
  }

  return maxDepth;
};