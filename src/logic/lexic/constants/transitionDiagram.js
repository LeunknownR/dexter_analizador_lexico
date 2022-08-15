import { STATES } from "./states";
import { CHARACTER_LIST } from "./characters";
/*
             |    letra       |digito       |     _
---------------------------------------------------------------
inicio       |  identificador |    entero     | identificador
identificador|  identificador | identificador | identificador
entero       |  identificador |    entero     | error
*/

// DECREMENTOR_VAR_1_1: "decrementorVar11",
// DECREMENTOR_VAR: "decrementorVar",
// Decrementador de variable: --
// Decrementador de variable: -=

const TO_STRING_1 = Object.values(CHARACTER_LIST)
    .filter(value => value !== CHARACTER_LIST.DOUBLE_QUOTE)
    .reduce((acc, value) => ({
        ...acc,
        [value]: STATES.STRING_1
    }), { [CHARACTER_LIST.DOUBLE_QUOTE]: STATES.STRING_F });
// Cadena interpolación: @`""""sadkkasjdkjs " ''`
const TO_STRING_INTERP_2 = Object.values(CHARACTER_LIST)
    .filter(value => value !== CHARACTER_LIST.BACKTICK)
    .reduce((acc, value) => ({
        ...acc,
        [value]: STATES.STRING_INTERP_2
    }), { [CHARACTER_LIST.BACKTICK]: STATES.STRING_INTERP_F });

export const TRANSITION_DIAGRAM = {
    [STATES.START]: {
        [CHARACTER_LIST.LETTER]: STATES.IDENTIFIER,
        [CHARACTER_LIST.UNDERSCORE]: STATES.IDENTIFIER,
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER,
        [CHARACTER_LIST.ASTERISK]: STATES.OPERATOR_PRODUCT,
        [CHARACTER_LIST.SLASH]: STATES.OPERATOR_DIVISION,
        [CHARACTER_LIST.PLUS]: STATES.OPERATOR_PLUS,
        [CHARACTER_LIST.HYPHEN]: STATES.OPERATOR_PLUS,
        [CHARACTER_LIST.SEMICOLON]: STATES.EOF,
        [CHARACTER_LIST.START_PAREN]: STATES.START_PAREN,
        [CHARACTER_LIST.END_PAREN]: STATES.END_PAREN,
        [CHARACTER_LIST.AMPERSAND]: STATES.OPERATOR_CONJ_1,
        [CHARACTER_LIST.VERTICAL_BAR]: STATES.OPERATOR_DISJ_1,
        [CHARACTER_LIST.EXCLAMATION_MARK]: STATES.OPERATOR_NOT,
        [CHARACTER_LIST.GREATER_THAN]: STATES.OPERATOR_GREATER_THAN,
        [CHARACTER_LIST.DOUBLE_QUOTE]: STATES.STRING_1,
        [CHARACTER_LIST.AT]: STATES.STRING_INTERP_1
    },
    [STATES.INTEGER]: {
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER
    },
    [STATES.IDENTIFIER]: {
        [CHARACTER_LIST.LETTER]: STATES.IDENTIFIER,
        [CHARACTER_LIST.UNDERSCORE]: STATES.IDENTIFIER,
        [CHARACTER_LIST.DIGIT]: STATES.IDENTIFIER
    },
    [STATES.OPERATOR_CONJ_1]: {
        [CHARACTER_LIST.AMPERSAND]: STATES.OPERATOR_CONJ_F
    },
    [STATES.OPERATOR_CONJ_F]: {},
    [STATES.OPERATOR_DISJ_1]: {
        [CHARACTER_LIST.VERTICAL_BAR]: STATES.OPERATOR_DISJ_F
    },
    [STATES.OPERATOR_DISJ_F]: {},
    [STATES.OPERATOR_NOT]: {},
    [STATES.OPERATOR_PLUS]: {},
    [STATES.OPERATOR_DIVISION]: {},
    [STATES.EOF]: {},
    [STATES.START_PAREN]: {},
    [STATES.END_PAREN]: {},
    [STATES.OPERATOR_PRODUCT]: {
        [CHARACTER_LIST.EQUALS]: STATES.MULTIPLIER_VAR
    },
    [STATES.MULTIPLIER_VAR]: {},
    [STATES.OPERATOR_GREATER_THAN]: {},
    [STATES.STRING_1]: TO_STRING_1,
    [STATES.STRING_F]: {},
    [STATES.STRING_INTERP_1]: {
        [CHARACTER_LIST.BACKTICK]: STATES.STRING_INTERP_2
    },
    [STATES.STRING_INTERP_2]: TO_STRING_INTERP_2,
    [STATES.STRING_INTERP_F]: {}
};