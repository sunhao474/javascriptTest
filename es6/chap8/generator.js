
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iter = createIterator();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);// undefined

let arrs = [1, 2, 3];

for (let value of arrs) {
    console.log(value);
}

// 判断一个对象是否可迭代：
function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}

// 为自定义对象创建迭代器
let collections = {
    items: [],
    *[Symbol.iterator] () {
        for(let item of this.items) {
            yield item;
        }
    }
};

collections.items.push(1);
for (let x of collections) {
    console.log(x);
}

// map、set 也有默认迭代器
let colors = ['red', 'blue', 'yellow'];
let tracking = new Set([1234, 678, 9012]);
let data = new Map();

data.set("title", "nmsl");
data.set("content", "your mum is dead");

for (let entry of colors.entries()) {
    console.log(entry);
}

for (let entry of tracking.entries()) {
    console.log(entry);
}

for (let entry of data.entries()) {
    console.log(entry);
}

// 除了entries，还有keys()和values()，迭代的是什么可以从字面意思理解
// for of循环也可用于上述三种对象，map隐式调用entries，数组和set默认调用values()

// 可以解构map的循环值
for (let [key, value] of data) {
    console.log(key + ':' + value);
}

// 迭代器高级用法
function *highLevleIter() {
    let first = yield 1;
    console.log(first);// 第二次的next的参数4会赋给first
    let second = yield first + 1;
    console.log(second);
    yield second + 3;
    // 详细解释一下迭代器的特殊调用机制：
    // 传递给next的参数会当作已经返回的yield语句的值，所以第一次传参没有意义
    // 第一次调用next，只会执行第一条语句的右值部分
    // 第二次调用next，会执行第一句的左值部分，这时候回想一下
    // “传递给next的参数会当作已经返回的yield语句的值”
    // 这时候console first就是传参的值
}

let iter2 = highLevleIter();
console.log('1:', iter2.next());
console.log('2:', iter2.next(4));
console.log('3:', iter2.next(5));

// 迭代器套娃
function *matryoshka() {
    yield *createIterator();
    yield *highLevleIter();
}

let matry = matryoshka();
console.log(matry.next());
console.log(matry.next());
console.log(matry.next());
console.log(matry.next());
console.log(matry.next(4));
console.log(matry.next(5));
console.log(matry.next());
console.log(matry.next());
console.log(matry.next());
console.log(matry.next());