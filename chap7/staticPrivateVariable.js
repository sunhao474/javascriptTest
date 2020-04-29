(function() {
    var privateVariable = 10;

    function priviateFunction() {
        return false;
    }

    // 初始化未经声明的变量，总是会创建一个全局变量
    MyObject = function() {

    }

    // 由于是在原型上创建，所以每个实例都用的是同一个方法，实例共享私有变量，调用这个特权方法会使所有实例的属性变化
    MyObject.prototype.publicMethod = function() {
        privateVariable++;
        return priviateFunction();
    };
})();

console.log(MyObject);
console.log(window);