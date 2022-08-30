import { showSpacesAndLinebreaks } from "utils/showSpacesAndLinebreaks";
import { CHARACTER_LIST } from "../lexic/constants/characters";
import { LITERALS, RESERVED_WORDS } from "../lexic/constants/reservedWords";

const joinCharacters = (characters, separator = " ") => characters.join(separator);

// Transformando lista de caracteres del lenguaje a notación BNF
const CHARACTER_LIST_BNF = Object.fromEntries(
    Object.entries(CHARACTER_LIST)
    .map(([key, ch]) => [key, `"${showSpacesAndLinebreaks(ch === CHARACTER_LIST.DOUBLE_QUOTE ? `\\${ch}` : ch)}"`])
);

// Documentando componentes léxicos con la notación BNF
const GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH = CHARACTERS => {
    return `${
        Object.values(CHARACTER_LIST_BNF)
        .filter(CHAR => !CHARACTERS.includes(CHAR))
        .map(showSpacesAndLinebreaks).join(" | ")
    }`;
}
const GET_STRING_DOUBLE_QUOTE_COMPONENT = () => {
    const ALLOWED_CHARACTERS_IN_STRING = GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH([CHARACTER_LIST.DOUBLE_QUOTE]);
    return {
        description: "Cadena",
        lexeme: joinCharacters([
            CHARACTER_LIST_BNF.DOUBLE_QUOTE,
            ALLOWED_CHARACTERS_IN_STRING,
            `{${ALLOWED_CHARACTERS_IN_STRING}}`,
            CHARACTER_LIST_BNF.DOUBLE_QUOTE
        ])
    };
}
const GET_STRING_BACKTICK_COMPONENT = () => {
    const ALLOWED_CHARACTERS_IN_STRING = GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH([CHARACTER_LIST.BACKTICK]);
    return {
        description: "Cadena con interpolación",
        lexeme: joinCharacters([
            CHARACTER_LIST_BNF.BACKTICK,
            `(${ALLOWED_CHARACTERS_IN_STRING})`,
            `{${ALLOWED_CHARACTERS_IN_STRING}}`,
            CHARACTER_LIST_BNF.BACKTICK
        ])
    };
}
const documentation = [
    {
        subtitle: "Palabras reservadas",
        words: Object.values(RESERVED_WORDS)
    },
    {
        subtitle: "Operadores aritméticos",
        components: [
            {
                description: "Operador suma",
                lexeme: CHARACTER_LIST_BNF.PLUS
            },
            {
                description: "Operador resta",
                lexeme: CHARACTER_LIST_BNF.HYPHEN,
            },
            {
                description: "Operador producto",
                lexeme: CHARACTER_LIST_BNF.ASTERISK,
            },
            {
                description: "Operador división",
                lexeme: CHARACTER_LIST_BNF.SLASH,
            },
            {
                description: "Operador de módulo",
                lexeme: CHARACTER_LIST_BNF.PERCENTAGE
            },
            {
                description: "Operador de potencia",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.ASTERISK,
                    CHARACTER_LIST_BNF.ASTERISK
                ])
            },
        ]
    },
    {
        subtitle: "Operadores lógicos",
        components: [
            {
                description: "Operador de conjunción",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.AMPERSAND,
                    CHARACTER_LIST_BNF.AMPERSAND
                ])
            },
            {
                description: "Operador de disyunción",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.VERTICAL_BAR,
                    CHARACTER_LIST_BNF.VERTICAL_BAR
                ])
            },
            {
                description: "Operador de negación",
                lexeme: CHARACTER_LIST_BNF.EXCLAMATION_MARK
            },
        ]
    },
    {
        subtitle: "Operadores de asignación",
        components: [
            {
                description: "Operador de asignación",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.DOLLAR,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Incrementador de variable 1 en 1",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.PLUS,
                    CHARACTER_LIST_BNF.PLUS
                ])
            },
            {
                description: "Incrementador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.PLUS,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Decrementador de variable 1 en 1",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.HYPHEN,
                    CHARACTER_LIST_BNF.HYPHEN
                ])
            },
            {
                description: "Decrementador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.HYPHEN,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Multiplicador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.ASTERISK,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Divisor de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.SLASH,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Potenciador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.ASTERISK,
                    CHARACTER_LIST_BNF.ASTERISK,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Operador ternario verdadero",
                lexeme: CHARACTER_LIST_BNF.QUESTION_MARK
            },
            {
                description: "Operador ternario falso",
                lexeme: CHARACTER_LIST_BNF.COLON
            }
        ]
    },
    {
        subtitle: "Operadores de comparación",
        components: [
            {
                description: "Operador menor que",
                lexeme: CHARACTER_LIST_BNF.LESS_THAN
            },
            {
                description: "Operador mayor que",
                lexeme: CHARACTER_LIST_BNF.GREATER_THAN
            },
            {
                description: "Operador igual",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.EQUALS,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Operador diferente",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.EXCLAMATION_MARK,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Operador menor o igual que",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.LESS_THAN,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            },
            {
                description: "Operador mayor o igual que",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.GREATER_THAN,
                    CHARACTER_LIST_BNF.EQUALS
                ])
            }
        ]
    },
    {
        subtitle: "Literales",
        components: [
            {
                description: "Entero",
                lexeme: joinCharacters([
                    `[${CHARACTER_LIST_BNF.HYPHEN}]`,
                    CHARACTER_LIST_BNF.DIGIT, 
                    `{${CHARACTER_LIST_BNF.DIGIT}}`
                ])
            },
            {
                description: "Decimal",
                lexeme: `[${CHARACTER_LIST_BNF.HYPHEN}] ${CHARACTER_LIST_BNF.DIGIT} {${CHARACTER_LIST_BNF.DIGIT}} ${CHARACTER_LIST_BNF.DOT} ${CHARACTER_LIST_BNF.DIGIT} {${CHARACTER_LIST_BNF.DIGIT}}`
            },
            GET_STRING_DOUBLE_QUOTE_COMPONENT(),
            GET_STRING_BACKTICK_COMPONENT(),
            {
                description: "Caracter",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.SINGLE_QUOTE,
                    `(${GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH([CHARACTER_LIST_BNF.SINGLE_QUOTE])})`,
                    CHARACTER_LIST_BNF.SINGLE_QUOTE
                ])
            },
            {
                description: "Booleano",
                lexeme: joinCharacters([
                    LITERALS.BOOLEAN.TRUE,
                    LITERALS.BOOLEAN.FALSE
                ], " | ")
            },
            {
                description: "Código hexadecimal de color",
                lexeme: joinCharacters([
                    `(${CHARACTER_LIST_BNF.NUMBER_SIGN}`,
                    `(${CHARACTER_LIST_BNF.HEX_DIGIT} {3,4}))  |`,
                    `(${CHARACTER_LIST_BNF.NUMBER_SIGN}`,
                    `(${CHARACTER_LIST_BNF.HEX_DIGIT} {6}) |`,
                    `(${CHARACTER_LIST_BNF.HEX_DIGIT} {8}))`
                ])
            },
        ]
    },
    {
        subtitle: "Especiales",
        components: [
            {
                description: "Paréntesis de apertura",
                lexeme: CHARACTER_LIST_BNF.START_PAREN
            },
            {
                description: "Paréntesis de cierre",
                lexeme: CHARACTER_LIST_BNF.END_PAREN
            },
            {
                description: "Separador de expresiones",
                lexeme: CHARACTER_LIST_BNF.COMMA
            },
            {
                description: "Delimitador de apertura de bloque de sentencias",
                lexeme: CHARACTER_LIST_BNF.START_CURLY_BRACE
            },
            {
                description: "Delimitador de cierre de bloque de sentencias",
                lexeme: CHARACTER_LIST_BNF.END_CURLY_BRACE
            },
            {
                description: "Unión de entidades",
                lexeme: CHARACTER_LIST_BNF.DOT
            },
            {
                description: "Genérico",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.LESS_THAN,
                    `(${[
                        CHARACTER_LIST_BNF.LETTER, 
                        CHARACTER_LIST_BNF.UNDERSCORE
                    ].join(" | ")})`,
                    `{${[
                        CHARACTER_LIST_BNF.LETTER, 
                        CHARACTER_LIST_BNF.UNDERSCORE,
                        CHARACTER_LIST_BNF.DIGIT
                    ].join(" | ")}}`,
                    `{${CHARACTER_LIST_BNF.COMMA}`,
                    `(${[
                        CHARACTER_LIST_BNF.LETTER, 
                        CHARACTER_LIST_BNF.UNDERSCORE
                    ].join(" | ")})`,
                    `{${[
                        CHARACTER_LIST_BNF.LETTER, 
                        CHARACTER_LIST_BNF.UNDERSCORE,
                        CHARACTER_LIST_BNF.DIGIT
                    ].join(" | ")}}}`,
                    CHARACTER_LIST_BNF.GREATER_THAN
                ])
            },
            {
                description: "Definidor de cuerpo de expresión lambda",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.EQUALS,
                    CHARACTER_LIST_BNF.GREATER_THAN
                ])
            },
            {
                description: "Índice",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.START_BRACKET,
                    `{${CHARACTER_LIST_BNF.DIGIT}`,
                    `{${CHARACTER_LIST_BNF.DIGIT}}`,
                    `{${CHARACTER_LIST_BNF.COMMA} ${CHARACTER_LIST_BNF.DIGIT}`,
                    `{${CHARACTER_LIST_BNF.DIGIT}}}}`,
                    CHARACTER_LIST_BNF.END_BRACKET
                ])
            },
            {
                description: "Cierre de sentencia",
                lexeme: CHARACTER_LIST_BNF.SEMICOLON
            },
            {
                description: "Comentario de una línea",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.SLASH,
                    CHARACTER_LIST_BNF.SLASH,
                    `{${GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH([])}}`,
                    CHARACTER_LIST_BNF.LINE_BREAK
                ])
            },
            {
                description: "Comentario de varias lineas",
                lexeme: joinCharacters([
                    CHARACTER_LIST_BNF.SLASH,
                    CHARACTER_LIST_BNF.ASTERISK,
                    `{${GET_ALLOWED_CHARACTERS_IN_COMPONENT_WITH([])}}`,
                    CHARACTER_LIST_BNF.ASTERISK,
                    CHARACTER_LIST_BNF.SLASH
                ])
            },
        ]
    },
];

export default documentation;