function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}

var person = new Person('sunhao', 27, 'shabi');
person.sayName();
// 主要使用的构造方法