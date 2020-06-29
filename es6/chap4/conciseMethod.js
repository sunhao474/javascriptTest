let person  = {
    name: 'sunhao',
    sayName() {
        console.log(this.name);
    }
}

person.sayName();
person["qiong lai xing a bing wang"] = 'zxb';
console.log(person["qiong lai xing a bing wang"]);

// is操作符
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

// object.assign方法
Object.assign(person, {}, {
    age: '27',
    int: '50',
    str: '20',
    get job() {
        console.log('call job');
        return 'shabi';
    }
});

console.log(person);
console.log(person.job); // 不会取得get方法，job劣化为普通属性

// 属性排序
let attrs = {
    a: 1,
    1: 1,
    b: 1,
    3: 1,
    d: 1,
    2: 1,
} // 类型为数字的属性会升序，类型为字符的键按照添加到对象的顺序不变。

attrs.c = 1;
attrs[0] = 1;
console.log(Object.getOwnPropertyNames(attrs).join("|"));

// 改变原型
function apple() {
    this.name = 'apple';
}

apple.prototype = {
    sayName: function() {
        console.log(this.name);
    }
}

let appleInstance = new apple();
console.log(appleInstance.sayName);
console.log(appleInstance);

Object.setPrototypeOf(appleInstance, {
    sayHi: () => {
        console.log('hi');
    }
})

console.log(appleInstance.sayHi);
console.log(appleInstance);

// 调用原型同名方法
let father = {
    sayHi() {
        console.log('ni ma hi');
    }
}

let son = {
    sayHi() {
        super.sayHi();
        console.log('hi');
    }
}

Object.setPrototypeOf(son, father);
son.__proto__ = father;
son.sayHi();
