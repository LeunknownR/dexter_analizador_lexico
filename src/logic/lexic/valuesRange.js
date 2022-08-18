const regex = {
    letter: /^[a-zA-Z]$/,
    digit: /^[0-9]$/,
    hexDigit: /^[0-9a-fA-F]$/
};

export class RecognizerValuesRange {
    static Letter = str => {
        return regex.letter.test(str);
    }
    static Digit = str => {
        return regex.digit.test(str);
    }
    static HexDigit = str => {
        return regex.hexDigit.test(str);
    }
}