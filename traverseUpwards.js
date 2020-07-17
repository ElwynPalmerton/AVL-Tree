Tree.prototype.traverseUpwards = function (n) {
  let imbalancedSubtree;

  if (n.parent !== null) {
    imbalancedSubtree = n.parent.traverseUpwards();
  } else {
    imbalancedSubtree = null;
  }

  if (imbalancedSubtree === null) return;

  if (this.head === imbalancedSubtree) {
    let subTree = imbalancedSubtree.rebalance(); //returns the new top parent node (Z).
    if (subTree) {
      //console.log("head before joining: ", this.head);
      this.head = subTree;
      //console.log("Head after joining: ", this.head)
      this.head.parent = null;
    }
  } else {
    // Needs to account
    // for left and right.
    let parent = imbalancedSubtree.parent;

    let subTree = imbalancedSubtree.rebalance();
    if (subTree) {
      if (subTree.value < parent.value) {
        parent.left = subTree;
        subTree.parent = parent;
      } else {
        parent.right = subTree;
        subTree.parent = parent;
      }
    }
    //Attach to the left or right of its parent.
  }
};

Node.prototype.traverseUpwards = function () {
  if (this.balance === 2 || this.balance === -2) {
    return this;
  }
  if (this.balance === 0) return null;
  if (this.parent === null) return null;
  return this.parent.traverseUpwards();
};

Node.prototype.rebalance = function () {
  if (this.balance === -2) {
    if (this.right.balance > 0) {
      //RL imbalanced
      let shifted = this.right.rotateRight();
      this.right = shifted;
      return this.rotateLeft();
    } else {
      //RR imbalaced.
      return this.rotateLeft();
    }
  } else if (this.balance === 2) {
    if (this.left.balance < 0) {
      //LR
      let shifted = this.left.rotateRight();
      this.left = shifted;
      return this.rotateRight();

      //rotate left and the right... (?)
    } else {
      //console.log("LL imbalanced.");
      //rotate right.
      return this.rotateRight();
    }
  }

  // return;
};

Node.prototype.rotateLeft = function () {
  let z = this.right;
  let t23 = z.left;
  if (t23 !== null) {
    this.right = t23;
    t23.parent = this;
  } else {
    this.right = null;
  }

  z.left = this;
  z.parent = null;
  this.parent = z;

  return z;
};

Node.prototype.rotateRight = function () {
  let z = this.left;
  let t23 = z.right;
  if (t23 !== null) {
    this.left = t23;
    t23.parent = this;
  } else {
    this.left = null;
  }
  z.right = this;
  z.parent = null;
  this.parent = z;
  return z;
};
