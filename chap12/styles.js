var myDiv = document.getElementById("myDiv");
var computedStyle = document.defaultView.getComputedStyle(myDiv, null); // 可以获取实际展现的css样式
console.log(computedStyle.backgroundColor); // 注意背景色是被内联样式覆盖
console.log(computedStyle.width);
console.log(computedStyle.height);
console.log(computedStyle.border);

// IE不支持该方法，但是IE有一个currentStyle方法