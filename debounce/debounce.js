function debounce(func, wait) {
    let timer;

    function bindFunc() {
        if (timer) clearTimeout(timer);

        let context = this;
        let args = arguments;

        timer = setTimeout(function() {
            console.log(arguments);
            console.log(args);
            console.log(this);
            console.log(context);
            func.apply(context, args);
        }, wait);
    }

    return bindFunc;
}

function handleChange(e) {
    console.log(this);
    console.log(e);
}

// input.onchange = dbhandleChange(e){}
let dbHandleChange = debounce(handleChange, 500);


sbObj = {
    name: 'sunhao',
    func: (age) => {
        console.log(this);
        console.log(age);
    },
}


let dbSbObjFunc = debounce(sbObj.func, 500);
let input = document.getElementById('txtinput');
input.onchange = dbSbObjFunc;
dbSbObjFunc(17);

