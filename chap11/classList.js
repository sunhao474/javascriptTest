const div = getElementById('a');

div.classList // 一个列表，包含所有引用的css名称 但是只有firefox和chrome支持

document.activeElement //获取当前获得了焦点的元素

document.hasFocus() // 判断当前页面是否取得了焦点

document.readyState == 'complete' // 判断当前页面是否加载完成

// 自定义属性,用data打头，在dataset里可以访问到
const jsx 
= 
<div data-appId="custom">
    <div>23</div>
</div>

jsx.dataset.appId == 'custom'; //true

// innerHTML插入script不会执行其中的脚本。inne
jsx.innerHTML = '<div>23</div>'

jsx.outerHTML = '<div data-appId="custom"><div>23</div></div>'// 返回包括他本身及所有子元素

jsx.children // 只包含元素节点，不会包含文本节点等其他节点

jsx.contains(document.body) // 该方法确定jsx是否是body的子节点，还有dom3的方法compareDocumentPosition()也可以做到