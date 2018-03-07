import "babel-polyfill";

() => {
    return Array.from(arguments).reduce((a, b) => a + b);
}

const a = [1,3];
const b = [...a];

let c = { 'key': 'value' };
let d = {...c};

class Foo {
    method() {}
}