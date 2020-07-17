Node.prototype.bubbleDepth = function () {
  if (this.parent !== null) {
    if (this.parent.depth < this.depth + 1) {
      this.parent.depth = this.depth + 1;
      this.parent.bubbleDepth();
    }
  }
}