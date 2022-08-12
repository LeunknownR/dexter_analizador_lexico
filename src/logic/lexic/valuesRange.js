export class RecognizerValuesRange {
    static Letter = str => {
        return /^[a-zA-Z]$/g.test(str);
    }
    static Digit = str => {
        return /^[0-9]$/g.test(str);
    }
}