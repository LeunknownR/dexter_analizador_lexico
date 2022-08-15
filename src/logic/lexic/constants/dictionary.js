import { STATES } from "./states";

export const TOKEN_DICTIONARY = {
    [STATES.IDENTIFIER]: "Identificador",
    [STATES.INTEGER]: "Entero",
    [STATES.OPERATOR_PLUS]: "Operador suma",
    [STATES.OPERATOR_DIVISION]: "Operador división",
    [STATES.OPERATOR_PRODUCT]: "Operador producto",
    [STATES.START_PAREN]: "Paréntesis de apertura",
    [STATES.END_PAREN]: "Paréntesis de cierre",
    [STATES.OPERATOR_CONJ_F]: "Operador de conjunción",
    [STATES.OPERATOR_DISJ_F]: "Operador de disyunción",
    [STATES.OPERATOR_NOT]: "Operador de negación",
    [STATES.EOF]: "Cierre de sentencia",
    [STATES.RESERVED_WORD]: "Palabra reservada"
};

export const isToken = token => {
    return Object.keys(TOKEN_DICTIONARY).includes(token);
}