var nAdd;

function f1() {
    var n = 999;
    nAdd = function () { ++n }
    function f2() {
        console.log(n)
    }
    return f2;
}

var result = f1()

result()
nAdd();
result()

var name = 'window';
var object = {
    name: 'my  object',
    getNmae: function () {
        // var that = this;
        return function () {
            return that.name
        }
    }
}

console.log(object.getNmae()())