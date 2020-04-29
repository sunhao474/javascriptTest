// 寄生式继承
 function createPerson(original) {
     var clone = Object.create(original); // create方法是浅拷贝
     clone.sayHi = function() {
         console.log('hi');
     }

     return clone;
 }

