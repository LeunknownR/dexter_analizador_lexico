import { STATES } from "./states";

export const TOKEN_DICTIONARY = {
    [STATES.IDENTIFIER]: "Identificador",
    [STATES.INTEGER]: "Entero",
    [STATES.OPERATOR_PLUS]: "Operador suma",
    [STATES.START_PAREN]: "Paréntesis de apertura",
    [STATES.END_PAREN]: "Paréntesis de cierre",
    [STATES.EOF]: "Cierre de sentencia",
    [STATES.RESERVED_WORD]: "Palabra reservada"
};