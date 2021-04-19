//https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript
function sum(n) {
	let result = n;
    function f(b) {
        result += b;
        return f;
    }
    console.log(result)
    return f;
}
console.log(sum(10)(5)(6)(5));
