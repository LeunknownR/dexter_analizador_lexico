export const RESERVED_WORDS = {
    IF: "if"
};
export const isReservedWord = lexeme => Object.values(RESERVED_WORDS).includes(lexeme);