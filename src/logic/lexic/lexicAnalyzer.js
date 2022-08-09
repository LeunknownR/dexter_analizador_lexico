import { DIAGRAM_TRANSITION } from "./constants/diagramTransition";
import { TOKEN_DICTIONARY } from "./constants/stateToToken";
import { CHARACTER_LIST } from "./constants/characters";
import { RecognizerValuesRange } from "./utils/valuesRange";
import { STATES } from "./constants/states";
import { isReservedWord } from "./constants/reservedWords";

const lexicAnalyzer = (input, debugging = false) => {
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
        // Setteando valores de ser una palabra reservada
        newComponent.token = {
            key: STATES.RESERVED_WORD,
            name: TOKEN_DICTIONARY[STATES.RESERVED_WORD]
        };
        newComponent.lexeme = currentLexeme;
    }
    const addToComponentList = () => {
        const newComponent = {
            token: currentToken,
            lexeme: currentLexeme
        };
        checkIsReservedWord(newComponent);
        componentList.push(newComponent);
        debugLog.push("**********");
        // Limpiando
        currentState = "start";
        currentLexeme = "";
    }
    const iterator = (ch, idx, length, iterate = true) => {
        if (ch === "\r")
            return;
        if (RecognizerValuesRange.Letter(ch)) 
            currentChar = CHARACTER_LIST.LETTER;
        else if (ch === CHARACTER_LIST.UNDERSCORE)
            currentChar = CHARACTER_LIST.UNDERSCORE;
        else if (RecognizerValuesRange.Digit(ch)) 
            currentChar = CHARACTER_LIST.DIGIT;
        else {
            // Verificando si el caracter se encuentra en la lista de caracteres admitidos, sino null
            currentChar = Object.values(CHARACTER_LIST).some(CH => CH === ch) ? ch : null;
            // Lanzando error en caso de no estar permitido
            if (!currentChar) 
                throw new Error("** Error léxico **\n");
        }
        // Salteando espacio en blanco si está en el estado "start"
        if (currentState === STATES.START && currentChar === CHARACTER_LIST.WHITE_SPACE) 
            return;
        // Obteniendo nuevo estado
        const newState = DIAGRAM_TRANSITION[currentState][currentChar];
        // Agregando al registro de depuración
        debugLog.push(`* ${ch} ${currentState} && ${currentChar} = ${newState}`);
        // Actualizando estado actual
        currentState = DIAGRAM_TRANSITION[currentState][currentChar];
        // Verificando si la operación ha retornado un estado
        if (currentState) {
            currentLexeme += ch;
            currentToken = {
                key: currentState,
                name: TOKEN_DICTIONARY[currentState]
            };
            // Recogiendo último componente antes de que el análisis finalice
            if (idx === length - 1) 
                addToComponentList();
            return;
        }
        // Hay estado de error
        addToComponentList();
        // Revisando si no es un espacio en blanco para iterar una vez más
        if (ch !== CHARACTER_LIST.WHITE_SPACE && iterate) 
            iterator(ch, idx, length, false);
    };
    //#endregion
    // Recorriendo array de caracteres
    inputCharacters.forEach((ch, idx, { length }) => iterator(ch, idx, length));
    // Mostrando registro de depuración y lista de componentes léxicos obtenidos al final del análisis
    if (debugging) {
        console.table(debugLog);
        console.table(componentList);
    }
    return componentList;
}

export default lexicAnalyzer;