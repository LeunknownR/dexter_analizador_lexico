import { TRANSITION_DIAGRAM } from "./constants/transitionDiagram";
import { isToken, TOKEN_DICTIONARY } from "./constants/dictionary";
import { CHARACTER_LIST } from "./constants/characters";
import { RecognizerValuesRange } from "./valuesRange";
import { isColorCodeHexState, STATES } from "./constants/states";
import { isReservedWord } from "./constants/reservedWords";

const ignoreCharacters = ch => [CHARACTER_LIST.WHITE_SPACE, CHARACTER_LIST.LINE_BREAK].includes(ch);

const lexicAnalyzer = input => {
    // Convirtiando la entrada a un array de caracteres
    const inputCharacters = input.split("");
    //#region Variables necesarias para el análisis
    const componentList = [], debugLog = [];
    let currentState = "start", 
        currentChar = "",
        currentLexeme = "",
        currentToken = {
            key: "",
            name: ""
        };
    //#endregion
    //#region Functions
    const checkIsReservedWord = newComponent => {
        // Verificando si no cumple con ser una palabra reservada
        if (![STATES.IDENTIFIER, undefined].includes(currentState) 
            || !isReservedWord(currentLexeme)) return;
        // Reportando componente encontrado
        const tokenName = TOKEN_DICTIONARY[STATES.RESERVED_WORD];
        addTitleToDebugLog({
            lexeme: currentLexeme,
            token: tokenName
        }, true);
        // Setteando valores de ser una palabra reservada
        newComponent.token = {
            key: STATES.RESERVED_WORD,
            name: tokenName
        };
        newComponent.lexeme = currentLexeme;
    }
    const addTitleToDebugLog = (title, isReservedWord = false) => {
        // Reportando componente encontrado
        debugLog[debugLog.length - 1] = {
            ...debugLog[debugLog.length-1],
            title,
            isReservedWord
        };
    }
    const addToComponentList = () => {
        const newComponent = {
            token: currentToken,
            lexeme: currentLexeme
        };
        // Reportando componente encontrado
        addTitleToDebugLog({
            ...newComponent,
            token: newComponent.token.name
        });
        checkIsReservedWord(newComponent);
        componentList.push(newComponent);
        // Limpiando
        currentState = "start";
        currentLexeme = "";
    }
    const addToDebugLog = (ch, newState) => {
        let newLog = {
            state: currentState || STATES.ERROR,
            char: { 
                group: ch === currentChar ? null : currentChar, 
                value: ch 
            },
            newState: newState || STATES.ERROR
        };
        if (currentState === STATES.START) {
            debugLog.push({
                operations: [newLog]
            });
            return;
        }
        debugLog[debugLog.length - 1].operations.push(newLog);
    }
    const lexicError = (ch = "") => {
        throw {
            message: `${currentLexeme}${ch}` 
        };
    }
    const iterator = (ch, idx, length, iterate = true) => {
        if (ch === "\r")
            return;
        if (isColorCodeHexState(currentState) && RecognizerValuesRange.HexDigit(ch)) 
            currentChar = CHARACTER_LIST.HEX_DIGIT;
        else if (RecognizerValuesRange.Letter(ch)) 
            currentChar = CHARACTER_LIST.LETTER;
        else if (RecognizerValuesRange.Digit(ch)) 
            currentChar = CHARACTER_LIST.DIGIT;
        else {
            // Verificando si el caracter se encuentra en la lista de caracteres admitidos, sino null
            currentChar = Object.values(CHARACTER_LIST).some(CH => CH === ch) ? ch : null;
            // Lanzando error en caso de no estar permitido
            if (!currentChar) 
                lexicError(ch)
        }
        // Salteando espacio en blanco si está en el estado "start"
        if (currentState === STATES.START && ignoreCharacters(currentChar)) 
            return;
        // Obteniendo nuevo estado
        const newState = TRANSITION_DIAGRAM[currentState][currentChar];
        // Agregando al registro de depuración
        addToDebugLog(ch, newState)
        // Lanzando un error léxico si el estado inicial y el caracter actual no retorna un nuevo estado
        if (currentState === STATES.START && !newState) 
            lexicError(ch);
        // Actualizando estado actual
        currentState = newState;
        // Verificando si la operación ha retornado un estado
        if (currentState) {
            currentLexeme += ch;
            currentToken = {
                key: currentState,
                name: TOKEN_DICTIONARY[currentState]
            };
            // Recogiendo último componente antes de que el análisis finalice
            if (idx < length - 1) return; 
            if (!isToken(currentToken.key)) 
                lexicError();
            addToComponentList();
            return;
        }
        // Lanzando error léxico si el último estado no pertenece a un token
        if (!isToken(currentToken.key)) 
            lexicError();
        // Hay estado de error
        addToComponentList(ch);
        // Revisando si no es un espacio en blanco para iterar una vez más
        if (!ignoreCharacters(ch) && iterate) 
            iterator(ch, idx, length, false);
    };
    //#endregion
    // Recorriendo array de caracteres
    inputCharacters.forEach((ch, idx, { length }) => iterator(ch, idx, length));
    return [componentList, debugLog];
}

export default lexicAnalyzer;