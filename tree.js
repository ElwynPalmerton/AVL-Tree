function Tree() {
  this.head = null;
  this.totalHeight = null;
}


Tree.prototype.addValue = function (node) {
  if (this.head === null) {
    this.head = node;
    this.head.parent = null;
  } else {
    this.head.addNode(node);
  }
}

Tree.prototype.traverse = function () {
  if (this.head === null) {
    // console.log('Empty tree, its whithered skeletal limbs haunt the winter dusk like the long forgotton souls of your dead ancestors.');
    return;
  } else {
    // console.log('The gods have blessed you with a bounteous harvest: numerical values ripe on the branches like juicy peaches searchable in log n time.')
    this.head.visit();
    return;
  }
}

Tree.prototype.find = function (val) {
  if (this.head.value === val) {
    return this.head;
  } else {
    return this.head.search(val);
  }
}