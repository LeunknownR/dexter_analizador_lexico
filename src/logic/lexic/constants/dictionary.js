import { STATES } from "./states";

export const TOKEN_DICTIONARY = {
    [STATES.RESERVED_WORD]: "Palabra reservada",
    [STATES.IDENTIFIER]: "Identificador",
    [STATES.INTEGER]: "Entero",
    [STATES.DECIMAL]: "Decimal",
    [STATES.OPERATOR_PLUS]: "Operador suma",
    [STATES.OPERATOR_SUBTRACTION]: "Operador resta",
    [STATES.OPERATOR_DIVISION]: "Operador división",
    [STATES.OPERATOR_PRODUCT]: "Operador producto",
    [STATES.OPERATOR_POWER]: "Operador potencia",
    [STATES.OPERATOR_MODULE]: "Operador módulo",
    [STATES.START_PAREN]: "Paréntesis de apertura",
    [STATES.END_PAREN]: "Paréntesis de cierre",
    [STATES.START_CURLY_BRACE]: "Llave de apertura",
    [STATES.END_CURLY_BRACE]: "Llave de apertura",
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
    [STATES.EOF]: "Cierre de sentencia",
    [STATES.ENTITIES_UNION]: "Unión de entidades",
    [STATES.OPERATOR_ASSIGNMENT_F]: "Operador de asignación",
    [STATES.INCREMENTOR_VAR_1_1]: "Incrementador de variable 1 en 1",
    [STATES.INCREMENTOR_VAR]: "Incrementador de variable",
    [STATES.DECREMENTOR_VAR_1_1]: "Decrementador de variable 1 en 1",
    [STATES.DECREMENTOR_VAR]: "Decrementador de variable",
    [STATES.OPERATOR_LESS_THAN]: "Operador menor que",
    [STATES.OPERATOR_LESS_THAN_OR_EQUAL_TO]: "Operador menor o igual que",
    [STATES.OPERATOR_GREATER_THAN_OR_EQUAL_TO]: "Operador mayor o igual que",
    [STATES.OPERATOR_EQUALS_F]: "Operador igual",
    [STATES.OPERATOR_DIFFERENT]: "Operador diferente",
    [STATES.SEPARATION_OF_EXPRESSIONS]: "Separador de expresiones",
    [STATES.GENERIC_F]: "Genérico",
    [STATES.LAMBDA_EXPRES_BODY_DEF]: "Definidor de cuerpo de expresión lambda",
    [STATES.COLOR_CODE_HEX_RGB_SIMPLE]: "Color hexadecimal RGB simple",
    [STATES.COLOR_CODE_HEX_RGBA_SIMPLE]: "Color hexadecimal RGBA simple",
    [STATES.COLOR_CODE_HEX_RGB_DOUBLE]: "Color hexadecimal RGB de doble digito",
    [STATES.COLOR_CODE_HEX_RGBA_DOUBLE]: "Color hexadecimal RGBA de doble digito",
    [STATES.COMMENT_ONE_LINE_F]: "Comentario de una línea",
    [STATES.CHARACTER_F]: "Caracter",
    [STATES.INDEX_F]: "Indice",
    [STATES.COMMENT_MULTILINE_F] : "Comentario de varias líneas"
};

export const isToken = token => {
    return Object.keys(TOKEN_DICTIONARY).includes(token);
}