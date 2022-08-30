import { CHARACTER_LIST } from "../lexic/constants/characters";
import { RESERVED_WORDS } from "../lexic/constants/reservedWords";

const joinCharacters = characters => characters.join("");

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
                lexeme: CHARACTER_LIST.PLUS
            },
            {
                description: "Operador resta",
                lexeme: CHARACTER_LIST.HYPHEN,
            },
            {
                description: "Operador productos",
                lexeme: CHARACTER_LIST.ASTERISK,
            },
            {
                description: "Operador división",
                lexeme: CHARACTER_LIST.SLASH,
            },
            {
                description: "Operador de módulo",
                lexeme: CHARACTER_LIST.PERCENTAGE
            },
            {
                description: "Operador de potencia",
                lexeme: joinCharacters([
                    CHARACTER_LIST.ASTERISK,
                    CHARACTER_LIST.ASTERISK
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
                    CHARACTER_LIST.AMPERSAND,
                    CHARACTER_LIST.AMPERSAND
                ])
            },
            {
                description: "Operador de disyunción",
                lexeme: joinCharacters([
                    CHARACTER_LIST.VERTICAL_BAR,
                    CHARACTER_LIST.VERTICAL_BAR
                ])
            },
            {
                description: "Operador de negación",
                lexeme: CHARACTER_LIST.EXCLAMATION_MARK
            },
        ]
    },
    {
        subtitle: "Operadores de asignación",
        components: [
            {
                description: "Operador de asignación",
                lexeme: joinCharacters([
                    CHARACTER_LIST.DOLLAR,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Incrementador de variable 1 en 1",
                lexeme: joinCharacters([
                    CHARACTER_LIST.PLUS,
                    CHARACTER_LIST.PLUS
                ])
            },
            {
                description: "Incrementador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST.PLUS,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Decrementador de variable 1 en 1",
                lexeme: joinCharacters([
                    CHARACTER_LIST.HYPHEN,
                    CHARACTER_LIST.HYPHEN
                ])
            },
            {
                description: "Decrementador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST.HYPHEN,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Multiplicador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST.ASTERISK,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Divisor de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST.SLASH,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Potenciador de variable",
                lexeme: joinCharacters([
                    CHARACTER_LIST.ASTERISK,
                    CHARACTER_LIST.ASTERISK,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Operador ternario verdadero",
                lexeme: CHARACTER_LIST.QUESTION_MARK
            },
            {
                description: "Operador ternario falso",
                lexeme: CHARACTER_LIST.COLON
            }
        ]
    },
    {
        subtitle: "Operadores de comparación",
        components: [
            {
                description: "Operador menor que",
                lexeme: CHARACTER_LIST.LESS_THAN
            },
            {
                description: "Operador mayor que",
                lexeme: CHARACTER_LIST.GREATER_THAN
            },
            {
                description: "Operador igual",
                lexeme: joinCharacters([
                    CHARACTER_LIST.EQUALS,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Operador diferente",
                lexeme: joinCharacters([
                    CHARACTER_LIST.EXCLAMATION_MARK,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Operador menor o igual que",
                lexeme: joinCharacters([
                    CHARACTER_LIST.LESS_THAN,
                    CHARACTER_LIST.EQUALS
                ])
            },
            {
                description: "Operador mayor o igual que",
                lexeme: joinCharacters([
                    CHARACTER_LIST.GREATER_THAN,
                    CHARACTER_LIST.EQUALS
                ])
            }
        ]
    },
    {
        subtitle: "Literales",
        components: [
            {
                description: "Decimal",
                lexeme: joinCharacters([
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.DOT,
                    `<${CHARACTER_LIST.DIGIT}>`,
                ])
            },
            {
                description: "Decimal negativo",
                lexeme: joinCharacters([
                    CHARACTER_LIST.START_PAREN,
                    CHARACTER_LIST.HYPHEN,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.DOT,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.END_PAREN
                ])
            },
            {
                description: "Entero",
                lexeme: CHARACTER_LIST.DIGIT
            },
            {
                description: "Entero negativo",
                lexeme: joinCharacters([
                    CHARACTER_LIST.START_PAREN,
                    CHARACTER_LIST.HYPHEN,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.END_PAREN
                ])
            },
            {
                description: "Cadena",
                lexeme: joinCharacters([
                    CHARACTER_LIST.DOUBLE_QUOTE,
                    //AUN ME FALTA PIPIPI
                    CHARACTER_LIST.DOUBLE_QUOTE
                ])
            },
            {
                description: "Cadena interpolación",
                //lexeme: AUN ME FALTA PIPIPI X2
            },
            {
                description: "Caracter",
                //lexeme: AUN ME FALTA PIPIPI X3
            },
            {
                description: "Booleano",
                //lexeme: AUN ME FALTA PIPIPI X4
            },
            {
                description: "Código hexadecimal de color",
                //lexeme: AUN ME FALTA PIPIPI X5
            },
        ]
    },
    {
        subtitle: "Especiales",
        components: [
            {
                description: "Paréntesis de apertura",
                lexeme: CHARACTER_LIST.START_PAREN
            },
            {
                description: "Paréntesis de cierre",
                lexeme: CHARACTER_LIST.END_PAREN
            },
            {
                description: "Separador de expresiones",
                lexeme: CHARACTER_LIST.COMMA
            },
            {
                description: "Delimitador de apertura de bloque de sentencias",
                lexeme: CHARACTER_LIST.START_CURLY_BRACE
            },
            {
                description: "Delimitador de cierre de bloque de sentencias",
                lexeme: CHARACTER_LIST.END_CURLY_BRACE
            },
            {
                description: "Unión de entidades",
                lexeme: CHARACTER_LIST.DOT
            },
            {
                description: "Genérico",
                //lexeme: AUN ME FALTA PIPIPI X6
            },
            {
                description: "Definidor de cuerpo de expresión lambda",
                lexeme: joinCharacters([
                    CHARACTER_LIST.EQUALS,
                    CHARACTER_LIST.GREATER_THAN
                ])
            },
            {
                description: "Índice vacío",
                lexeme: joinCharacters([
                    CHARACTER_LIST.START_BRACKET,
                    CHARACTER_LIST.END_BRACKET
                ])
            },
            {
                description: "Índice",
                lexeme: joinCharacters([
                    CHARACTER_LIST.START_BRACKET,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.END_BRACKET
                ])
            },
            {
                description: "Índice múltiple",
                lexeme: joinCharacters([
                    CHARACTER_LIST.START_BRACKET,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.COMMA,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.COMMA,
                    `<${CHARACTER_LIST.DIGIT}>`,
                    CHARACTER_LIST.END_BRACKET
                ])
            },
            {
                description: "Cierre de sentencia",
                lexeme: CHARACTER_LIST.SEMICOLON
            },
            {
                description: "Comentario de una línea",
                lexeme: joinCharacters([
                    CHARACTER_LIST.SLASH,
                    CHARACTER_LIST.SLASH,
                    // AUN ME FALTA PIPIPI X7
                    CHARACTER_LIST.SLASH,
                    CHARACTER_LIST.SLASH
                ])
            },
            {
                description: "Comentario de varias lineas",
                lexeme: joinCharacters([
                    CHARACTER_LIST.SLASH,
                    CHARACTER_LIST.ASTERISK,
                    // AUN ME FALTA PIPIPI X8
                    CHARACTER_LIST.ASTERISK,
                    CHARACTER_LIST.SLASH
                ])
            },
        ]
    },
];

export default documentation;