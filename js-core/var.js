
function foo() {
    var x = 1;
    function bar() {
        var x = 'a';
        console.log('x in bar', x)
    }
    console.log('x in foo', x)
    bar()
}

foo()

function foos() {
    var y;
    var x = 'hello' + y;
    console.log(x)
    y = 'world'
}

foos()
