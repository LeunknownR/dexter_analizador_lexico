import { STATES } from "./states";

export const LITERALS = {
    BOOLEAN: {
        TRUE: "true",
        FALSE: "false"
    }
};
export const RESERVED_WORDS = {
    IF: "if",
    ELSE: "else",
    DOING: "doing",
    FOROF: "forof",
    SWITCH: "switch",
    CASE: "case",
    WHILING: "whiling",
    CONST: "const",
    OF: "of",
    FOR: "for",
    STATIC: "static",
    PRIVATE: "private",
    PUBLIC: "public",
    PROTECTED: "protected",
    INTERNAL: "internal",
    NEW: "new",
    BREAK: "break"
};
const checkCollection = (COLLECTION, lexeme) => {
    return Object.values(COLLECTION).includes(lexeme);
}

export const whatReservedWordTypeIs = lexeme => {
    if (checkCollection(RESERVED_WORDS, lexeme))
        return STATES.RESERVED_WORD;
    if (checkCollection(LITERALS.BOOLEAN, lexeme))
        return STATES.BOOLEAN;
    return null;
}