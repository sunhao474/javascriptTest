let set = new Set();
// set里字符串和数字会正确识别为不同的项
set.add(5);
set.add("5");

let key1 = {}, key2 = {};
// 由于不会被转化为字符串，key1和key2也是不同的项
set.add(key1);
set.add(key2);

console.log(set.size);

// 跟直觉不同，后设置的项不会覆盖已经存在的项，而是被忽略
set.add(5);

set.has(5) // true
set.has(6) // false

set.delete(5)
set.has(5) // false

// set.clear(); // 清空
// console.log(set.size); // 0

let obj = {
    name: 'binger',
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        console.log(this);
        dataSet.forEach(function(element){
            console.log(this);
            this.output(element);
        }, this);
    },
}

obj.process(set);

// 利用set清除重复项的特性，为数组去重
function clearDuplicates(array) {
    return [... new Set(array)];
}

let arr = [1, 2, 3, 3, 4, 4, 4];
arr = clearDuplicates(arr);

console.log(arr); // [1, 2, 3, 4]

// 如果你要在set中保存dom节点，最好的方式是使用weakset，因为set会创建新引用