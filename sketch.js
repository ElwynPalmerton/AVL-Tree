let tree;

let initialValues = [1, 4, 5, 6, 7, 5.5, 5.6, 4.2, 0.5, 8, 9, 10, 11, 12]

function setup() {
  createCanvas(900, 600)

  tree = new Tree();


  initialValues.forEach(value => {
    let n = new Node(value);
    tree.addValue(n);
    n.bubbleDepth();
    //n.calculateDepth();
    tree.assignBalance();
    tree.traverseUpwards(n); //Should be called traverseAndBalance()???
  })

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