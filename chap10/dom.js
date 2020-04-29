var a = document.getElementById('a');
var b = document.getElementById('b');

a.childNodes.forEach((item, index) => {
    console.log(item);
})

// 注意是否有element，如果函数含字符element，则获取的是element类型节点，这一般也是我们想要的
console.log('-----');
console.log(b.parentNode);
console.log(b.parentElement);

console.log('-----');
console.log(b.previousSibling);
console.log(b.previousElementSibling);

console.log('-----');

document.anchors; // 所有带name特性的a标签
document.form; // 包含文档中所有的form元素
document.images; // 包含文档中所有的img元素
document.links; // 所有带href属性的a元素

console.log(a.attributes.length);
