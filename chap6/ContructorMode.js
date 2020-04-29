function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    }
}

var person1 = new Person('sunhao', 17, 'shabi');
person1.sayName();
// 这个模式下，每个对象的sayName方法都是不同的实例，但方法是没有这个必要的。
