import { STATES } from "./states";

export const TOKEN_DICTIONARY = {
    [STATES.RESERVED_WORD]: "Palabra reservada",
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
    [STATES.MULTIPLIER_VAR]: "Multiplicador de variable",
    [STATES.OPERATOR_GREATER_THAN]: "Operador mayor que",
    [STATES.STRING_F]: "Cadena de caracteres",
    [STATES.STRING_INTERP_F]: "Cadena de caracteres con interpolación",
    [STATES.EOF]: "Cierre de sentencia"
};

export const isToken = token => {
    return Object.keys(TOKEN_DICTIONARY).includes(token);
}