import { CHARACTER_LIST } from "./characters";
import { STATES } from "./states";
/*
             |    letra       |digito       |     _           | *
---------------------------------------------------------------
inicio       |  identificador |    entero     | identificador 
identificador|  identificador | identificador | identificador
entero       |  identificador |    entero     | error
*/


export const TRANSITION_DIAGRAM = {
    [STATES.START]: {
        [CHARACTER_LIST.LETTER]: STATES.IDENTIFIER,
        [CHARACTER_LIST.UNDERSCORE]: STATES.IDENTIFIER,
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER,
        [CHARACTER_LIST.ASTERISK]: STATES.OPERATOR,
        [CHARACTER_LIST.PLUS]: STATES.OPERATOR,
        [CHARACTER_LIST.HYPHEN]: STATES.OPERATOR,
        [CHARACTER_LIST.SEMICOLON]: STATES.EOF,
        [CHARACTER_LIST.START_PAREN]: STATES.START_PAREN,
        [CHARACTER_LIST.END_PAREN]: STATES.END_PAREN
    },
    [STATES.INTEGER]: {
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER
    },
    [STATES.IDENTIFIER]: {
        [CHARACTER_LIST.LETTER]: STATES.IDENTIFIER,
        [CHARACTER_LIST.UNDERSCORE]: STATES.IDENTIFIER,
        [CHARACTER_LIST.DIGIT]: STATES.IDENTIFIER,
    },
    [STATES.OPERATOR]: {},
    [STATES.EOF]: {},
    [STATES.START_PAREN]: {},
    [STATES.END_PAREN]: {}
};
