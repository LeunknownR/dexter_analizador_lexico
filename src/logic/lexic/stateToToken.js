const { STATES } = require("./states");

const TOKEN_DICTIONARY = {
    [STATES.IDENTIFIER]: "Identificador",
    [STATES.INTEGER]: "Entero",
    [STATES.OPERATOR]: "Operador",
    [STATES.START_PAREN]: "Paréntesis de apertura",
    [STATES.END_PAREN]: "Paréntesis de cierre",
    [STATES.EOF]: "Cierre de sentencia"
};

module.exports = {
    TOKEN_DICTIONARY
};