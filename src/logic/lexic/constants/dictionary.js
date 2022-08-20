import { STATES } from "./states";

export const TOKEN_DICTIONARY = {
    [STATES.RESERVED_WORD]: "Palabra reservada",
    [STATES.IDENTIFIER]: "Identificador",
    [STATES.INTEGER]: "Entero",
    [STATES.OPERATOR_PLUS]: "Operador suma",
    [STATES.OPERATOR_SUBTRACTION]: "Operador resta",
    [STATES.OPERATOR_DIVISION]: "Operador división",
    [STATES.OPERATOR_PRODUCT]: "Operador producto",
    [STATES.OPERATOR_POWER]: "Operador potencia",
    [STATES.OPERATOR_MODULE]: "Operador módulo",
    [STATES.START_PAREN]: "Paréntesis de apertura",
    [STATES.END_PAREN]: "Paréntesis de cierre",
    [STATES.OPERATOR_CONJ_F]: "Operador de conjunción",
    [STATES.OPERATOR_DISJ_F]: "Operador de disyunción",
    [STATES.OPERATOR_NOT]: "Operador de negación",
    [STATES.MULTIPLIER_VAR]: "Multiplicador de variable",
    [STATES.DIVISOR_VAR]: "Divisor de variable",
    [STATES.POWER_VAR]: "Potenciador de variable",
    [STATES.OPERATOR_TERNARY_TRUE]: "Operador ternario verdadero",
    [STATES.OPERATOR_TERNARY_FALSE]: "Operador ternario falso",
    [STATES.OPERATOR_GREATER_THAN]: "Operador mayor que",
    [STATES.STRING_F]: "Cadena de caracteres",
    [STATES.STRING_INTERP_F]: "Cadena de caracteres con interpolación",
    [STATES.EOF]: "Cierre de sentencia",
    [STATES.OPERATOR_ASSIGNMENT_F]: "Operador de asignación",
    [STATES.INCREMENTOR_VAR_1_1]: "Incrementador de variable 1 en 1",
    [STATES.INCREMENTOR_VAR]: "Incrementador de variable",
    [STATES.OPERATOR_LESS_THAN]: "Operador menor que",
    [STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO]: "Operador menor o igual que",
    [STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO]: "Operador mayor o igual que",
    [STATES.OPERATOR_EQUALS]: "Operador igual",
    [STATES.OPERATOR_DIFFERENT]: "Operador diferente",
    [STATES.SEPARATION_OF_EXPRESSIONS]: "Separador de expresiones"
};

export const isToken = token => {
    return Object.keys(TOKEN_DICTIONARY).includes(token);
}