function addNumbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        sum = sum + element;
    }
    return sum;

}

var result = addNumbers(3, 5, 8, 15);
console.log(result);