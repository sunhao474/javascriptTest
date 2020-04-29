function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}

var person1 = new Person('sunhao', 27, 'shabi');
person1.sayName();
