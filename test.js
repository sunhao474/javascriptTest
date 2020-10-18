// function b() {
//     let b = 1;
// }

// function a(age) {
//     this.age = age;
//     console.log(this);
// }

// const obj = {
//     name: 'a',
// }

// a(17);
// a.apply(obj, [17]);
// let A = new a(17);

// var length = 10;
// function fn() {
//     console.log(this.length);
// }

// fn();

// let obj2 = {
//     length: 5,
//     method: function(fn) {
//         console.log(arguments);
//         fn();
//         arguments[0]();
//     }
// }

// obj2.method(fn, 1);
// // 来理一下思路，从外层开始
// // 首先，method方法的调用者是谁？obj2，所以他的this指向的是obj2
// // 他的arguments有fn，1两者，所以arguments[0]是fn
// // 再看25行的fn调用，fn是正常的函数调用，所以他的执行环境是全局的
// // 所以25行的fn调用之后，控制台打印的length是window.length
// // 当arguments[0]()调用的也是fn，但注意这时候，执行环境对象就变成arguments本身
// // 这时候this就指向arguments自己了
// // 注意，除了.以外[]也是对象调用，想想，obj2.length,也可以写作obj2['length']

// var funcArr = [];

// for (let i = 0; i < 10; i++) {
//     funcArr[i] = function() {
//         console.log(i);
//     };
// }

// funcArr[5]();

Function.prototype.customBind = function (context) {
    if (Object.prototype.toString.call(this) !== '[object Function]') {
        throw new Error('only function could call custombind');
    }

    var callFunc = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var npFunc = function () { };
    var bindFunc = function () {
        console.log(this);
        console.log(typeof this);
        if (npFunc.prototype.isPrototypeOf(this)) {
            return callFunc.apply(this, args);
        } else {
            return callFunc.apply(context, args);
        }
    }

    if (this.prototype) {
        npFunc.prototype = this.prototype;
    }

    bindFunc.prototype = new npFunc();

    return bindFunc;
}

let obj = {

};

a = a.customBind(obj);

function a() {
    this.age = 27;
    console.log(this);
}

a();

let b = new a();
