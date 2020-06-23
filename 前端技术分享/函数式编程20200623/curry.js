function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) {

    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}

var fn0 = function(a, b, c, d) {
    return [a, b, c, d];
}

var fn1 = curry(fn0);

fn1("a", "b")("c")("d");

fn1("a", "b")
// 相当于
curry(fn0)("a", "b")
// 相当于
curry(sub_curry(fn0, "a", "b"))
// 相当于
// 注意 ... 只是一个示意，表示该函数执行时传入的参数会作为 fn0 后面的参数传入
curry(function(...){
    return fn0("a", "b", ...)
})

curry(sub_curry(function(...){
    return fn0("a", "b", ...)
}), "c")
// 相当于
curry(function(...){
    return (function(...) {return fn0("a", "b", ...)})("c")
})
// 相当于
curry(function(...){
     return fn0("a", "b", "c", ...)
})

(function(...){
    return fn0("a", "b", "c", ...)
})("d")
// 相当于
fn0("a", "b", "c", "d")

// sub_curry 的作用就是用函数包裹原函数，
// 然后给原函数传入之前的参数，
// 当执行 fn0(...)(...) 的时候，执行包裹函数，返回原函数，
// 然后再调用 sub_curry 再包裹原函数，
// 然后将新的参数混合旧的参数再传入原函数，
// 直到函数参数的数目达到要求为止。
