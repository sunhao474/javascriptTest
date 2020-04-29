function SuperType(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age, job, son) {
    SuperType.call(this, name, age, job); // 在实例化subtype时调用第二次syperType

    this.son = son;
}

SubType.prototype = new SuperType(); // 第一次调用superType

var person1 = new SubType('sunhao', 17, 'shabi', 'labi');// 实例化

// 这会导致，protoType里有三个属性，实例中也有三个属性，实例属性屏蔽了原型中的同名属性

console.log(person1);
person1.sayName();

// 属性继承利用子类构造函数调用父类构造函数实现，方法继承利用原型实现，这是最常用的继承方法,但是这个方案有缺点，在上面注释标明。