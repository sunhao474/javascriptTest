function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }

    return o;
}

var person1 = new Person('sunhao', 27, 'shabi'); // 申明
person1.sayName();

// 注意和工厂模式就只有申明时候有差别