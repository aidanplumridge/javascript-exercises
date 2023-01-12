const fibonacci = function(a) {
    if (a < 1) {
        return 'OOPS';
    }
    else {
        let code = [1, 1];
        for (let i = 1; i < a-1; i++) {
            code.push(code[i-1]+code[i]);        
        }
        return code[code.length - 1];
        }

};
//console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
