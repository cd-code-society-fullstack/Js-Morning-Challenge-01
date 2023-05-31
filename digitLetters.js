const digitLetters = (str) => {
    let digits = str.match(/\d/g) || [];
    let letters = str.match(/[a-z]/g) || [];
    return {
        digits: digits.length,
        letters: letters.length,
    };
}

module.exports = digitLetters;