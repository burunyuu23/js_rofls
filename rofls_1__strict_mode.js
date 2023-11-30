var a, b, c, d;

String.prototype.toThing = function(str) {
    console.log(this === str);
    a = this;
    b = str;
}

String.prototype.toThingStrict = function(str) {
    "use strict";
    console.log(this === str);
    c = this;
    d = str;
}

"Yo!".toThing("Yo!"); // false
"Yo!".toThingStrict("Yo!");  // true

// go to about:blank, run code and check heap memory snapshot or use debugger (иу я бы за такое тебе по шапке дал)
// a = String @36693
// b, c, d = "Yo!" @23335
// cause non-strict convert primitive value into object