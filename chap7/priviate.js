function MyObject() {
    var privateNumber = 10;

    function privateFunc() {
        return false;
    }

    this.publicMethod = function () {
        privateNumber++;
        return privateFunc();
    }
}

// privateNumber和privateFunc只能通过publicMethod访问
