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
export const isReservedWord = lexeme => Object.values(RESERVED_WORDS).includes(lexeme);