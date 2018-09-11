var _ = require("underscore");

function sayHello() {
  console.log("Hello, World");
}

_.times(5, sayHello);

/* 
Your previous Plain Text content is preserved below:

Given a string of HTML tags, construct a tree to represent it.


INPUT:
------
A string of HTML tags. Examples:
1. "<div><div></div></div>"
2. "<html><head></head><body><h1></h1><div><div></div><a></a><a></a></div></body></html>" (indented below for your visual convenience)

<html>
  <head></head>
  <body>
    <h1></h1>
    <div>
      <div></div>
      <a></a>
      <a></a>
    </div>
  </body>
</html>


OUTPUT:
-------
A tree that represents these HTML tags. Let's write a function that pretty-prints the tree in the following format so that we can verify correctness:

html
-head
-body
--h1
--div
---div
---a
---a


Assume all of the following about the input string:
- Only HTML open and close tags. There are no DOCTYPEs, no attributes within tags (<div class="...">) and no self-closing tags (<div />).
- Correctly formatted. Every opening tag is properly formatted, and is guaranteed to have a corresponding closing tag.

TIPS:
- You can choose a language and run your code. Click Run as much as you want!
- Don't worry too much about algorithmic complexity. Focus on getting a working version first, before optimizing your code. 
- Feel free to explain your code as you write it, but this is not required--we'd rather see more progress towards completion.
- We're looking for your speed, communication of ideas, decomposition, and ability to write clean and functional code.
-------------

input: "<html><head></head><body><h1></h1><div><div></div><a></a><a></a></div></body></html>"

output:
html
-head
-body
--h1
--div
---div
---a
---a

stack to keep track of each tag 
split string on "><" => array of each tag


checking for / in front of tag
iterate over the array and push on to stack




 */

class TreeNode {
  constructor(value) {
    this.val = value;
    this.parent = null;
    this.children = [];
  }
}

const input =
  "<html><head></head><body><h1></h1><div><div></div><a></a><a></a></div></body></html>";

const htmlTree = stringInput => {
  let string = stringInput.slice(1, stringInput.length - 2);
  let split = string.split("><");

  let root = new TreeNode(split[0]);
  let stack = [root];
  // console.log(root)

  for (let i = 1; i < split.length; i++) {
    let tag = split[i];

    if (tag[0] !== "/") {
      let newNode = new TreeNode(tag);
      stack[stack.length - 1].children.push(newNode);
      stack.push(newNode);
      // console.log(stack);
    } else {
      // root.children.push(newNode);
      stack.pop();
    }
  }

  return root;
};

console.log(htmlTree(input));
