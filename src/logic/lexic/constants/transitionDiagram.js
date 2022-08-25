import { STATES } from "./states";
import { CHARACTER_LIST } from "./characters";
/*
             |    letter    |   digit      |     _
---------------------------------------------------------------
start        |  identifier  |   integer    | identifier
identifier   |  identifier  |  identifier  | identifier
integer      |              |    integer   |   
*/
const TO_COMMENT_ONE_LINE = Object.values(CHARACTER_LIST)
.filter(value => value !== CHARACTER_LIST.LINE_BREAK)
.reduce((acc, value) => ({
    ...acc,
    [value]: STATES.COMMENT_ONE_LINE_F
}), {});

const TO_COMMENT_MULTILINE = Object.values(CHARACTER_LIST)
.filter(value => value !== CHARACTER_LIST.ASTERISK)
.reduce((acc, value) => ({
    ...acc,
    [value]: STATES.COMMENT_MULTILINE
}), {[CHARACTER_LIST.ASTERISK]: STATES.COMMENT_MULTILINE_1});

const TO_COMMENT_MULTILINE_1 = Object.values(CHARACTER_LIST)
.filter(value => value !== CHARACTER_LIST.SLASH)
.reduce((acc, value) => ({
    ...acc,
    [value]: STATES.COMMENT_MULTILINE
}), {[CHARACTER_LIST.SLASH]: STATES.COMMENT_MULTILINE_F});

const TO_CHARACTER = Object.values(CHARACTER_LIST)
    .filter(value => value !== CHARACTER_LIST.SINGLE_QUOTE)
    .reduce((acc, value) => ({
        ...acc,
        [value]: STATES.CHARACTER_1
    }), {  });

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
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_EQUALS_1,
        [CHARACTER_LIST.COMMA]: STATES.SEPARATION_OF_EXPRESSIONS,
        [CHARACTER_LIST.QUESTION_MARK]: STATES.OPERATOR_TERNARY_TRUE,
        [CHARACTER_LIST.COLON]: STATES.OPERATOR_TERNARY_FALSE,
        [CHARACTER_LIST.DOT]: STATES.ENTITIES_UNION,
        [CHARACTER_LIST.NUMBER_SIGN]: STATES.COLOR_CODE_HEX_1,
        [CHARACTER_LIST.SINGLE_QUOTE]: STATES.CHARACTER,
        [CHARACTER_LIST.START_BRACKET]: STATES.INDEX,
    },
    [STATES.OPERATOR_EQUALS_1]: { 
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_EQUALS_F,
        [CHARACTER_LIST.GREATER_THAN]: STATES.LAMBDA_EXPRES_BODY_DEF
    },
    [STATES.LAMBDA_EXPRES_BODY_DEF]: {},
    [STATES.OPERATOR_EQUALS_F]: {},
    [STATES.INTEGER]: {
        [CHARACTER_LIST.DIGIT]: STATES.INTEGER,
        [CHARACTER_LIST.DOT]: STATES.DECIMAL
    },
    [STATES.SEPARATION_OF_EXPRESSIONS]: {},
    [STATES.IDENTIFIER]: GET_AS_IDENTIFIER(STATES.IDENTIFIER),
    [STATES.OPERATOR_CONJ_1]: {
        [CHARACTER_LIST.AMPERSAND]: STATES.OPERATOR_CONJ_F
    },
    [STATES.OPERATOR_CONJ_F]: {},
    [STATES.OPERATOR_DISJ_1]: {
        [CHARACTER_LIST.VERTICAL_BAR]: STATES.OPERATOR_DISJ_F
    },
    [STATES.OPERATOR_DISJ_F]: {},
    [STATES.OPERATOR_NOT]: {
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_DIFFERENT,
    },
    [STATES.OPERATOR_DIFFERENT]: {},
    [STATES.OPERATOR_PLUS]: {
        [CHARACTER_LIST.PLUS]: STATES.INCREMENTOR_VAR_1_1,
        [CHARACTER_LIST.EQUALS]: STATES.INCREMENTOR_VAR
    },
    [STATES.DECIMAL]: {
        [CHARACTER_LIST.DIGIT]: STATES.DECIMAL,
    },
    [STATES.OPERATOR_DIVISION]: {
        [CHARACTER_LIST.EQUALS]: STATES.DIVISOR_VAR,
        [CHARACTER_LIST.SLASH]:STATES.COMMENT_ONE_LINE_F,
        [CHARACTER_LIST.ASTERISK] : STATES.COMMENT_MULTILINE,
    },
    [STATES.COMMENT_ONE_LINE_F]:TO_COMMENT_ONE_LINE,
    [STATES.DIVISOR_VAR]: {},
    [STATES.INCREMENTOR_VAR_1_1]:{},
    [STATES.INCREMENTOR_VAR]:{},
    [STATES.OPERATOR_SUBTRACTION]: {
        [CHARACTER_LIST.HYPHEN]: STATES.DECREMENTOR_VAR_1_1,
        [CHARACTER_LIST.EQUALS]: STATES.DECREMENTOR_VAR
    },
    [STATES.DECREMENTOR_VAR_1_1]:{},
    [STATES.DECREMENTOR_VAR]:{},
    [STATES.OPERATOR_MODULE]: {},
    [STATES.EOF]: {},
    [STATES.START_PAREN]: {},
    [STATES.END_PAREN]: {},
    [STATES.START_CURLY_BRACE]: {},
    [STATES.END_CURLY_BRACE]: {},
    [STATES.ENTITIES_UNION]: {},
    [STATES.OPERATOR_PRODUCT]: {
        [CHARACTER_LIST.EQUALS]: STATES.MULTIPLIER_VAR,
        [CHARACTER_LIST.ASTERISK]: STATES.OPERATOR_POWER,
    },
    [STATES.COMMENT_MULTILINE]:TO_COMMENT_MULTILINE,
    [STATES.COMMENT_MULTILINE_1]:TO_COMMENT_MULTILINE_1,
    [STATES.COMMENT_MULTILINE_F]:{},
    [STATES.MULTIPLIER_VAR]: {},
    [STATES.OPERATOR_POWER]: {
        [CHARACTER_LIST.EQUALS]: STATES.POWER_VAR,
    },
    [STATES.POWER_VAR]: {},
    [STATES.OPERATOR_GREATER_THAN]: {
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO,
    },
    [STATES.OPERATOR_TERNARY_TRUE]: {},
    [STATES.OPERATOR_TERNARY_FALSE]: {},
    [STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO]: {},
    [STATES.STRING_1]: TO_STRING_1,
    [STATES.STRING_INTERP_1]: {
        [CHARACTER_LIST.BACKTICK]: STATES.STRING_INTERP_2
    },
    [STATES.STRING_INTERP_2]: TO_STRING_INTERP_2,
    [STATES.STRING_F]: {},
    [STATES.OPERATOR_ASSIGNMENT_1]: {
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_ASSIGNMENT_F
    },
    [STATES.OPERATOR_ASSIGNMENT_F]:{},
    [STATES.OPERATOR_LESS_THAN]:{
        [CHARACTER_LIST.EQUALS]: STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO,
        ...GET_AS_IDENTIFIER(STATES.GENERIC_1)
    },
    [STATES.GENERIC_1]: {
        ...GET_AS_IDENTIFIER(STATES.GENERIC_1),
        [CHARACTER_LIST.WHITE_SPACE]: STATES.GENERIC_1,
        [CHARACTER_LIST.COMMA]: STATES.GENERIC_2,
        [CHARACTER_LIST.GREATER_THAN]: STATES.GENERIC_F
    },
    [STATES.GENERIC_2]: {
        ...GET_AS_IDENTIFIER(STATES.GENERIC_1),
        [CHARACTER_LIST.WHITE_SPACE]: STATES.GENERIC_2
    },
    [STATES.GENERIC_F]: {},
    [STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO]:{},
    [STATES.COLOR_CODE_HEX_1]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_2
    },
    [STATES.COLOR_CODE_HEX_2]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_3
    },
    [STATES.COLOR_CODE_HEX_3]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_RGB_SIMPLE
    },
    [STATES.COLOR_CODE_HEX_RGB_SIMPLE]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_RGBA_SIMPLE
    },
    [STATES.COLOR_CODE_HEX_RGBA_SIMPLE]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_4
    },
    [STATES.COLOR_CODE_HEX_4]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_RGB_DOUBLE
    },
    [STATES.COLOR_CODE_HEX_RGB_DOUBLE]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_5
    },
    [STATES.COLOR_CODE_HEX_5]: {
        [CHARACTER_LIST.HEX_DIGIT]: STATES.COLOR_CODE_HEX_RGBA_DOUBLE
    },
    [STATES.COLOR_CODE_HEX_RGBA_DOUBLE]: {},
    [STATES.CHARACTER]:TO_CHARACTER,
    [STATES.CHARACTER_1]:{
        [CHARACTER_LIST.SINGLE_QUOTE]:STATES.CHARACTER_F,
    },
    [STATES.CHARACTER_F]:{} ,
    [STATES.INDEX]:{
        [CHARACTER_LIST.END_BRACKET]:STATES.INDEX_F,
        [CHARACTER_LIST.DIGIT]:STATES.INDEX_1,
    },
    [STATES.INDEX_1]:{
        [CHARACTER_LIST.END_BRACKET]:STATES.INDEX_F,
        [CHARACTER_LIST.DIGIT]:STATES.INDEX,
        [CHARACTER_LIST.WHITE_SPACE]:STATES.INDEX,
        [CHARACTER_LIST.COMMA]:STATES.INDEX_2 
    },
    [STATES.INDEX_2]:{
        [CHARACTER_LIST.DIGIT]:STATES.INDEX,
    },
    [STATES.INDEX_F]:{},
};