Tree.prototype.drawTree = function () {

  let level = 0;
  let depth = this.maxDepth();

  this.totalDepth = this.head.depth + 1;

  console.log(this.head.depth);

  let rowHeight = height / (this.head.depth + 1);


  let nodeSize = rowHeight / 4;

  push();
  translate(width / 2, rowHeight);

  if (this.head !== null) {
    this.head.drawNodes(rowHeight, nodeSize, level + 1);
  }
  pop();
}

Node.prototype.drawNodes = function (rowHeight, nodeSize, level) {

  textAlign(CENTER, CENTER);
  //This is what I need to xDist?
  let divs = Math.pow(2, level);
  let x = (width / divs) / 2; //Math.sin(angle) * rowHeight;


  let angle1 = Math.atan(x / rowHeight);

  let angle = Math.PI / 4;

  let y = Math.cos(angle) * rowHeight;


  //Drawing Node
  stroke(0);
  strokeWeight(1);
  noFill();
  if (x > nodeSize) {
    ellipse(0, 0, nodeSize, nodeSize);
  }

  let valueSize = 12;
  if (x < 16) {
    valueSize = nodeSize / 2;
  }

  textSize(valueSize);
  text(this.depth, 0, 0);


  let r = nodeSize / 2;
  let offsetY = r * Math.cos(angle1);
  let offsetX = r * Math.sin(angle1);


  if (this.left !== null) {
    push();
    line(-offsetX, offsetY, -x + offsetX, rowHeight - offsetY);
    translate(-x, rowHeight);
    this.left.drawNodes(rowHeight, nodeSize, level + 1);
  }


  if (this.right !== null) {
    push();
    line(offsetX, offsetY, x - offsetX, rowHeight - offsetY);
    translate(x, rowHeight);
    this.right.drawNodes(rowHeight, nodeSize, level + 1);
  }

  pop();

}