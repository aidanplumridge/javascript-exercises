const palindromes = function (text) {
    let reversedText = '';
    const patern = /[a-z]/i
    for (let i = text.length-1; i >= 0; i--) {
        if (patern.test(text[i])) {
        reversedText += text[i].toLowerCase();
        }
    }
    let textSansPunctuation = () => {
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            patern.test(text[i]) ? newText += text[i].toLowerCase() : "";          
        }
        return newText
    }

    return reversedText === textSansPunctuation() ? true: false;    
};
console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
