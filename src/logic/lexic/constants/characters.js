export const CHARACTER_LIST = {
    LETTER: "letter",
    DIGIT: "digit",
    HEX_DIGIT: "hexDigit",
    ASTERISK: "*",
    PLUS: "+",
    SLASH: "/",
    HYPHEN: "-",
    UNDERSCORE: "_",
    DOT: ".",
    WHITE_SPACE: " ",
    START_PAREN: "(",
    END_PAREN: ")",
    START_BRACKET: "[",
    END_BRACKET: "]",
    START_CURLY_BRACE: "{",
    END_CURLY_BRACE: "}",
    EQUALS: "=",
    GREATER_THAN: ">",
    LESS_THAN: "<",
    DOUBLE_QUOTE: "\"",
    BACKTICK: "`",
    PERCENTAGE: "%",
    AT: "@",
    SEMICOLON: ";",
    COLON: ":",
    QUESTION_MARK: "?",
    COMMA: ",",
    AMPERSAND: "&",
    VERTICAL_BAR: "|",
    EXCLAMATION_MARK: "!",
    LINE_BREAK: "\n",
    DOLLAR: "$",
    NUMBER_SIGN: "#"
};

export const getCharIdentifier = ch => {
    return Object.values(CHARACTER_LIST).some(CH => CH === ch) ? ch : null;
}