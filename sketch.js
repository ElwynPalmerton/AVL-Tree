let tree;

// let initialValues = [
//   6,
//   3,
//   4,
//   2,
//   5,
//   4,
//   2,
//   1,
//   0.5,
//   0.25,
//   0.1,
//   0.01,
//   0.001,
//   0.00001,
//   7,
//   8,
//   9,
//   10,
//   11,
// ];

let initialValues = [];

for (let i = 0; i < 30; i++) {
  initialValues[i] = Math.floor(Math.random(100) * 100);
}

function setup() {
  createCanvas(900, 600);

  tree = new Tree();

  initialValues.forEach((value) => {
    let n = new Node(value);
    tree.addValue(n);
    tree.assignDepth();
    tree.assignBalance();
    tree.traverseUpwards(n); //Should be called traverseAndBalance()???
  });

  //How would I calculate this dynamically in the loop above without so much redundacy.
  tree.assignDepth();

  // tree.traverse();

  background(200);
  tree.drawTree();
}

function mousePressed() {
  // console.log(mouseX, mouseY);
  // tree.removeNode(50);
  // console.log('pressed.');
  // background(200);
  // tree.drawTree();
}

function draw() {
  //background(200);
}
