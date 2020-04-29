var singleton = function() {
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }

    return {
        publicProperty: true,
        publicMethod: function() {
            privateVariable++;
            console.log(privateVariable);
            return privateFunction();
        }
    };
}
