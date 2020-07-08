let map = new Map(), mapkey1 = {}, mapkey2 = {};
map.set(mapkey1, 1);
map.set(mapkey2, "42");

console.log(map.get(mapkey1));
console.log(map.get(mapkey2));

// map同样有has, delete , clear方法，以及size属性，不再举例

map.forEach((value, key, ownerMap) => {
    console.log(key + " " + value);
    console.log(ownerMap === map);
})

// map也会创建引用；如果存储dom节点建议使用weakmap,weakmap和weakset无法枚举，所以没法用clear

// map 初始化用数组，每一项也是一个包含两项的数组，[key, value]
let map2 = new Map([['a', '1'], ['b', '2']]);

// 利用weakmap、闭包与iife构造私有变量

let Person  = (function() {
    let priviateData = new WeakMap();

    function Person(name) {
        priviateData.set(this, { name, });
    }

    Person.prototype.getName = function() {
        return priviateData.get(this).name;
    }

    return Person;
})();

let sunhao = new Person('sunhao');
console.log(sunhao.getName());