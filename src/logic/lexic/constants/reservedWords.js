export const RESERVED_WORDS = {
    IF: "if",
    FOROF: "forof",
    ELSE: "else"
};
export const isReservedWord = lexeme => Object.values(RESERVED_WORDS).includes(lexeme);