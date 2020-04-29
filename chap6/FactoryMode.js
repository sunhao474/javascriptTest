function createPerson(name, age, job) {
    var o  = new Object();
    o.name = name;
    o.age = age;
    o.job = job;

    o.sayname = function() {
        console.log(this.name);
    };

    return o;
}

var person = createPerson('sunhao', 17, 'shabi');
person.sayname();
