function a(a, b = 1) {
    console.log(arguments);
    console.log(a == arguments[0]);
    console.log(b == arguments[1]);
    a = 3;
    b = 2;
    console.log(a == arguments[0]);
    console.log(b == arguments[1]);
}

let x = 1;
let y = 3;
a(x);

console.log(x);
