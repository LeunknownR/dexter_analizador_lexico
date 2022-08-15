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
            }
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
                description: "Operador de disjunción",
                lexeme: joinCharacters([
                    CHARACTER_LIST.VERTICAL_BAR,
                    CHARACTER_LIST.VERTICAL_BAR
                ])
            },
            {
                description: "Operador de negación",
                lexeme: CHARACTER_LIST.EXCLAMATION_MARK
            }
        ]
    }
];

export default documentation;