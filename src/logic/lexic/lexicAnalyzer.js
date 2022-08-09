import { DIAGRAM_TRANSITION } from "./constants/diagramTransition";
import { TOKEN_DICTIONARY } from "./constants/stateToToken";
import { CHARACTER_LIST } from "./constants/characters";
import { RecognizerValuesRange } from "./utils/valuesRange";
import { STATES } from "./constants/states";
import { isReservedWord } from "./constants/reservedWords";

const lexicAnalyzer = (input, debugging = false) => {
    const componentList = [], debugBag = [];
    let currentState = "start", 
        currentChar = "",
        currentLexeme = "",
        currentToken = {
            key: "",
            name: ""
        };
    console.log(`Entrada: ${input}`);
    const checkIsReservedWord = newComponent => {
        if (currentState === STATES.IDENTIFIER || isReservedWord(currentLexeme))
        {
            newComponent.token = {
                key: STATES.RESERVED_WORD,
                name: TOKEN_DICTIONARY[STATES.RESERVED_WORD]
            };
            newComponent.lexeme = currentLexeme;
        }
    }
    const addToComponentList = () => {
        let newComponent = {
            token: currentToken,
            lexeme: currentLexeme
        };
        checkIsReservedWord(newComponent);
        componentList.push(newComponent);
        debugBag.push("**********");
        // Limpiando
        currentState = "start";
        currentLexeme = "";
    }
    const inputCharacters = input.split("");
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
            if (!currentChar) 
                throw new Error("** Error léxico **\n");
        }
        debugBag.push(`* ${ch} ${currentState} && ${currentChar} = ${DIAGRAM_TRANSITION[currentState][currentChar]}`);
        if (currentState === STATES.START && currentChar === CHARACTER_LIST.WHITE_SPACE) 
            return;
        currentState = DIAGRAM_TRANSITION[currentState][currentChar];
        // Verificando si hay error
        if (currentState) {
            currentLexeme += ch;
            currentToken = {
                key: currentState,
                name: TOKEN_DICTIONARY[currentState]
            };
            if (idx === length - 1) 
                addToComponentList();
            return;
        }
        addToComponentList();
        if (ch !== CHARACTER_LIST.WHITE_SPACE && iterate) 
            iterator(ch, idx, length, false);
    };
    inputCharacters.forEach((ch, idx, { length }) => iterator(ch, idx, length));
    if (debugging) {
        console.table(componentList);
        console.log(debugBag);
    }
    return componentList;
}

export default lexicAnalyzer;