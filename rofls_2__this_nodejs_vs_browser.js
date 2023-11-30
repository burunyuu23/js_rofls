var counter = 0;

var lol = function () {
    return () => {
        console.log(`${counter++}:`);
        console.log(this);
    };
}

lol() // skip
new lol;

var obj = { name: "dnlkk" }
obj.lol = lol();
obj.lol = new lol();

obj.lol();  // lol {}

setTimeout(obj.lol, 1);  // lol {}
setTimeout(() => obj.lol(), 1)  // lol {}

setTimeout(() => {
    lol = function() {
        console.log(`${counter++}:`);
        console.log(this);
    }
    obj.lol = lol;

    // document.body.addEventListener("click", obj.lol) // <body></body>
    // document.body.addEventListener("click", lol) // <body></body>

    obj.lol(); // obj
    setTimeout(obj.lol, 1); // nodejs: Timeout, browser: Window
    setTimeout(() => obj.lol(), 1) // obj
}, 20)

// document.body.addEventListener("click", obj.lol) // lol {}
// document.body.addEventListener("click", lol) // do nothing

