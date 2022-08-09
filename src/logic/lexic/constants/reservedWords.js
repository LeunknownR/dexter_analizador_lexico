export const RESERVED_WORDS = {
    IF: "if",
    FOROF: "forof"
};
export const isReservedWord = lexeme => Object.values(RESERVED_WORDS).includes(lexeme);