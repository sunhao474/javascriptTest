// 寄生式组合继承，最优方案
// 核心思想：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已, 并不值得为了获取一个原型副本而使用new创建一个对象实例
// 本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果置顶给子类型的原型

function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype); // 创建一个超类型的副本
    prototype.constructor = subType;// 为创建的副本添加constructor属性，为subType指定该原型时，会因为覆写的原因丢失constructor属性
    subType.prototype = prototype;// 为subType指定原型，同时constructor属性不会丢失。
}

// example

var number = 0; // 观察调用次数

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
    number++;
}

SuperType.prototype.sayName = function() {
    console.log(this.sayName);
}

function SubType(name,age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age);
}

var person1 = new SubType('sunhao', 17);
console.log(SubType);
console.log(person1);
person1.sayName();
person1.sayAge();

console.log(number);
