//https://www.codewars.com/kata/54c27ef1fb7da0118600046a/train/javascript
/*
var c1 = c.sum(1, 2);
c1.execute(); // == fns.sum(1, 2) == 3
c1.double().execute(); // == fns.double(fns.sum(1, 2)) == 6
c1.addOne().execute(); // == fns.addOne(fns.sum(1, 2)) == 4
c1.execute(); // == fns.sum(1, 2) == 3

var c2 = c1.sum(5);
c2.addOne().execute(); // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
c2.sum(3).execute(); // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
c2.execute(); // == fns.sum(fns.sum(1, 2), 5) == 8

c1.execute(); // == fns.sum(1, 2) == 3
*/

function chain(fns) {
    let execute = function () {};
    let sum = function (x, y) {
        return x + y;
    };
    let double = (x) => sum(x, x);
}

var c = chain({ sum: sum, minus: minus, double: double, addOne: addOne });
