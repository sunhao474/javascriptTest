function Father() {
    this.name = 'sunhao';
}

Father.prototype.getName = function() {
    console.log(this.name);
}

var father = new Father();

function Son() {
    this.name = 'luozihao';
}

Son.prototype = father;

console.log(Father.prototype);
console.log(father); // father.constructor是function Father()
var son = new Son();

console.log(Son.prototype); // Son.prototype == father实例，所以Son.prototype.constructor == function Father()
console.log(son);
