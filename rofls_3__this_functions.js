var obj = {
    name: 'dnlkk!',
    hi: function () {
        console.log(this);
    }
}

obj.hi();

obj.hi = function () {
    (() => console.log(this))();
}

obj.hi(); // the same

var obj2 = {
    name: 'dnlkk2!',
    hi: obj.hi
}

obj2.hi(); // this === obj2

obj.hi = function () {
    return () => console.log(this);
}

var LOL = new obj.hi
LOL() // this === obj.hi{}

obj2.hi = obj.hi;

obj2.hi()(); // this === obj2

obj.hi = () => {
    return () => console.log(this);
}
obj2.hi = obj.hi;

obj2.hi()(); // this === {} (global object ???) nodejs: {}, browser: window

obj.hi = function () {
    return function () {
        console.log(this);
    }
}

obj2.hi = obj.hi;


obj2.hi()(); // this === global object nodejs: Object [global], browser: window

setTimeout(obj2.hi(), 1); // nodejs: Timeout, browser: Window


obj.hi = function () {
    return () => console.log(this);
}

var LOL = new obj.hi
LOL() // this === obj.hi {}


// LINE 39 is awesome. my brain has crushed
