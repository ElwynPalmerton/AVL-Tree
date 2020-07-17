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
      } else {
        parent.right = subTree;
      }
    }
    //Attach to the left or right of its parent.
  }
}

Node.prototype.traverseUpwards = function () {
  if (this.balance === 2 || this.balance === -2) {
    return this;
  }
  if (this.balance === 0) return null;
  if (this.parent === null) return null;
  return this.parent.traverseUpwards();
}


Node.prototype.rebalance = function () {

  if (this.balance === -2) {
    if (this.right.balance > 0) {
      //console.log("RL imbalanced.");
      //rottate right and then left... (?)
    } else {
      //console.log("RR imbalanced.");
      //let result = 
      return this.rotateLeft();
      //console.log("this - rotated left: ", this);
      //console.log(result);
    }
  } else if (this.balance === 2) {
    if (this.left.balance < 0) {
      // console.log("LR imbalanced.");
      //rotate left and the right... (?)
    } else {
      //console.log("LL imbalanced.");
      //rotate right.
    }
  }

  // return;
}

Node.prototype.rotateLeft = function () {

  let z = this.right;
  let t23 = z.left;
  if (t23 !== null) {
    this.right = t23;
    t23.parent = this;
  }

  z.left = this;
  this.right = null;
  z.parent = null;

  this.parent = z;

  // console.log("z after rotation: ", z);


  return z;

}