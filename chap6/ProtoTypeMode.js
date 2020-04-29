function Person() {

}

Person.prototype.name = 'sunhao';
Person.prototype.age = 17;
Person.prototype.job = 'shabi';
Person.prototype.arr = ['a', 'b'];
Person.prototype.sayName = function () {
    console.log(this.name);
}

var person1 = new Person();
person1.name = 'labi'; // 注意，这会优先给person自己设置一个name属性
person1.arr.push('c'); // 属性是引用，会造成所有对象实例的arr都改变
person1.sayName();

//原型模式的缺点，每个属性都是引用