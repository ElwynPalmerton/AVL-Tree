Node.prototype.findSmallestChild = function () {
  if (this.left === null) {
    return this;
  } else {
    return this.left.findSmallestChild();
  }
};

Node.prototype.findLargestChild = function () {
  if (this.right == null) {
    return this;
  } else {
    return this.right.findLargestChild();
  }
};

Tree.prototype.findParent = function (child) {
  if (this.head.right.value === child.value) return this;
  if (this.head.left === child) return this;

  if (this.head.value > child.value) {
    return this.head.left.findParent(child);
  } else {
    return this.head.right.findParent(child);
  }
};

Node.prototype.findParent = function (child) {
  if (this.right === child) return this;
  if (this.left === child) return this;

  if (this.value > child.value) {
    return this.left.findParent(child);
  } else {
    return this.right.findParent(child);
  }
};

Tree.prototype.removeNode = function (value) {
  let removalNode = this.find(value);
  let parent = this.findParent(removalNode);

  if (removalNode.right === null && removalNode.left === null) {
    if (parent.value < removalNode.value) {
      parent.right = null;
    } else {
      parent.left = null;
    }
  } else if (removalNode.right !== null) {
    let replacement = removalNode.right.findSmallestChild();
    let replacementsParent = this.findParent(replacement);

    //Attach the removalNodes children to its replacement
    replacement.left = removalNode.left;

    if (removalNode.right !== replacement) {
      replacement.right = removalNode.right;
      replacementsParent.left = null;
    }

    if (parent.value <= replacement.value) {
      parent.right = replacement;
    } else {
      parent.left = replacement;
    }
  } else if (removalNode.left !== null) {
    let replacement = removalNode.left.findLargestChild();
    let replacementsParent = this.findParent(replacement);

    replacement.right = removalNode.right;

    if (removalNode.left !== replacement) {
      replacement.left = removalNode.left;
      replacementsParent.right = null;
    }

    if (parent.value <= replacement.value) {
      parent.right = replacement;
    } else {
      parent.left = replacement;
    }
  }

  //If the their is a right node then the replacementNode is remove.right.findSmallestChild.
  //if there isn't then the replacementNode = remove.left;
  //if the remove node has no children then we can just remove it.
};
