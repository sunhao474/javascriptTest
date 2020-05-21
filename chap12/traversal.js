
// createNodeIterator
let filter = {
    acceptNode: function(node) {
        return node.tagName.toLowerCase() == 'div' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
};

let iterator = document.createNodeIterator(document.getElementById('a'), NodeFilter.SHOW_ELEMENT, filter, false);

let node = iterator.nextNode();

// while (node !== null) {
//     console.log(node);
//     node = iterator.nextNode();
// }

// TreeWalker

iterator = document.createTreeWalker(document.getElementById('a'), NodeFilter.SHOW_ELEMENT, filter, false);

// console.log(iterator.lastChild());
console.log(iterator.firstChild()); // 第一个子节点
// console.log(iterator.nextNode());
// iterator = iterator.nextNode();
console.log(iterator.nextSibling());// 下一个同辈节点
console.log(iterator.previousSibling());// 上一个同辈节点

// 在treewalker的fitler中用nodeFilter.FILTER_REJECT，会跳过整个子树