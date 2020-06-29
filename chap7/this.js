function a() {
    this.name = 'a';
    let _this = this;
    return function() {
        console.log(_this);
        console.log(this);
    }
}

let A = new a();
A();