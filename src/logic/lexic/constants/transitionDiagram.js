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
const TO_STRING_INTERP_2 = Object.values(CHARACTER_LIST)
    .filter(value => value !== CHARACTER_LIST.BACKTICK)
    .reduce((acc, value) => ({
        ...acc,
        [value]: STATES.STRING_INTERP_2
    }), { [CHARACTER_LIST.BACKTICK]: STATES.STRING_F });
const GET_AS_IDENTIFIER = STATE => ({
    [CHARACTER_LIST.LETTER]: STATE,
    [CHARACTER_LIST.UNDERSCORE]: STATE,
    [CHARACTER_LIST.DIGIT]: STATE
});

export const TRANSITION_DIAGRAM = {
    [STATES.START]: {
        [CHARACTER_LIST.LETTER]: STATES.IDENTIFIER,
        [CHARACTER_LIST.UNDERSCORE]: STATES.IDENTIFIER,
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER,
        [CHARACTER_LIST.ASTERISK]: STATES.OPERATOR_PRODUCT,
        [CHARACTER_LIST.SLASH]: STATES.OPERATOR_DIVISION,
        [CHARACTER_LIST.PLUS]: STATES.OPERATOR_PLUS,
        [CHARACTER_LIST.PERCENTAGE]: STATES.OPERATOR_MODULE,
        [CHARACTER_LIST.HYPHEN]: STATES.OPERATOR_SUBTRACTION,
        [CHARACTER_LIST.SEMICOLON]: STATES.EOF,
        [CHARACTER_LIST.START_PAREN]: STATES.START_PAREN,
        [CHARACTER_LIST.END_PAREN]: STATES.END_PAREN,
        [CHARACTER_LIST.START_CURLY_BRACE]: STATES.START_CURLY_BRACE,
        [CHARACTER_LIST.END_CURLY_BRACE]: STATES.END_CURLY_BRACE,
        [CHARACTER_LIST.AMPERSAND]: STATES.OPERATOR_CONJ_1,
        [CHARACTER_LIST.VERTICAL_BAR]: STATES.OPERATOR_DISJ_1,
        [CHARACTER_LIST.EXCLAMATION_MARK]: STATES.OPERATOR_NOT,
        [CHARACTER_LIST.GREATER_THAN]: STATES.OPERATOR_GREATER_THAN,
        [CHARACTER_LIST.DOUBLE_QUOTE]: STATES.STRING_1,
        [CHARACTER_LIST.AT]: STATES.STRING_INTERP_1,
        [CHARACTER_LIST.DOLLAR]: STATES.OPERATOR_ASSIGNMENT_1,
        [CHARACTER_LIST.LESS_THAN]: STATES.OPERATOR_LESS_THAN,
        [CHARACTER_LIST.DOT]: STATES.ENTITIES_UNION,
        [CHARACTER_LIST.EQUALS]: STATES.LAMBDA_EXPRES_BODY_DEF_1,
        [CHARACTER_LIST.NUMBER_SIGN]: STATES.COLOR_CODE_HEX_1
    },
    [STATES.INTEGER]: {
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER
    },
    [STATES.IDENTIFIER]: GET_AS_IDENTIFIER(STATES.IDENTIFIER),
    [STATES.OPERATOR_CONJ_1]: {
        [CHARACTER_LIST.AMPERSAND]: STATES.OPERATOR_CONJ_F
    },
    [STATES.OPERATOR_CONJ_F]: {},
    [STATES.OPERATOR_DISJ_1]: {
        [CHARACTER_LIST.VERTICAL_BAR]: STATES.OPERATOR_DISJ_F
    },
    [STATES.OPERATOR_DISJ_F]: {},
    [STATES.OPERATOR_NOT]: {},
    [STATES.OPERATOR_PLUS]: {
        [CHARACTER_LIST.PLUS]:STATES.INCREMENTOR_VAR_1_1,
        [CHARACTER_LIST.EQUALS]:STATES.INCREMENTOR_VAR
    },
    [STATES.INCREMENTOR_VAR_1_1]:{},
    [STATES.INCREMENTOR_VAR]:{},
    [STATES.OPERATOR_SUBTRACTION]: {
        [CHARACTER_LIST.HYPHEN]: STATES.DECREMENTOR_VAR_1_1,
        [CHARACTER_LIST.EQUALS]: STATES.DECREMENTOR_VAR
    },
    [STATES.DECREMENTOR_VAR_1_1]:{},
    [STATES.DECREMENTOR_VAR]:{},
    [STATES.OPERATOR_DIVISION]: {},
    [STATES.OPERATOR_MODULE]: {},
    [STATES.EOF]: {},
    [STATES.START_PAREN]: {},
    [STATES.END_PAREN]: {},
    [STATES.START_CURLY_BRACE]: {},
    [STATES.END_CURLY_BRACE]: {},
    [STATES.ENTITIES_UNION]: {},
    [STATES.OPERATOR_PRODUCT]: {
        [CHARACTER_LIST.EQUALS]: STATES.MULTIPLIER_VAR,
        [CHARACTER_LIST.ASTERISK]: STATES.OPERATOR_POWER
    },
    [STATES.MULTIPLIER_VAR]: {},
    [STATES.OPERATOR_POWER]:{},
    [STATES.OPERATOR_GREATER_THAN]: {
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO,
    },
    [STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO]:{},
    [STATES.STRING_1]: TO_STRING_1,
    [STATES.STRING_INTERP_1]: {
        [CHARACTER_LIST.BACKTICK]: STATES.STRING_INTERP_2
    },
    [STATES.STRING_INTERP_2]: TO_STRING_INTERP_2,
    [STATES.STRING_F]: {},
    [STATES.OPERATOR_ASSIGNMENT_1]: {
        [CHARACTER_LIST.EQUALS]:STATES.OPERATOR_ASSIGNMENT_F
    },
    [STATES.OPERATOR_ASSIGNMENT_F]:{},
    [STATES.OPERATOR_LESS_THAN]:{
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO,
        ...GET_AS_IDENTIFIER(STATES.GENERIC_1)
    },
    [STATES.GENERIC_1]: {
        ...GET_AS_IDENTIFIER(STATES.GENERIC_1),
        [CHARACTER_LIST.GREATER_THAN]: STATES.GENERIC_F
    },
    [STATES.GENERIC_F]: {},
    [STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO]:{},
    [STATES.LAMBDA_EXPRES_BODY_DEF_1]: {
        [CHARACTER_LIST.GREATER_THAN]: STATES.LAMBDA_EXPRES_BODY_DEF_F
    },
    [STATES.LAMBDA_EXPRES_BODY_DEF_F]: {},
    [STATES.COLOR_CODE_HEX_1]: {}
};