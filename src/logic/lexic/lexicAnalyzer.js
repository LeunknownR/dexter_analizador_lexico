import { TRANSITION_DIAGRAM } from "./transitionDiagram";
import { TOKEN_DICTIONARY } from "./stateToToken";
import { CHARACTER_LIST } from "./characters";
import { STATES } from "./states";
import { RecognizerValuesRange } from "../utils/valuesRange";

const lexicAnalyzer = (input, debugging = false) => {
    const componentList = [], debugBag = [];
    let currentState = "start", 
        currentChar = "",
        currentLexeme = "",
        currentToken = {
            key: "",
            name: ""
        };
    const addToComponentList = () => {
        componentList.push({
            token: currentToken,
            lexeme: currentLexeme
        });
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
        debugBag.push(`* ${ch} ${currentState} && ${currentChar} = ${TRANSITION_DIAGRAM[currentState][currentChar]}`);
        if (currentState === STATES.START && currentChar === CHARACTER_LIST.WHITE_SPACE) {
            return;
        }
        currentState = TRANSITION_DIAGRAM[currentState][currentChar];
        // Verificando si hay error
        if (currentState) {
            currentToken = {
                key: currentState,
                name: TOKEN_DICTIONARY[currentState]
            };
            currentLexeme += ch;
            if (idx === length - 1) 
                addToComponentList();
            return;
        }
        addToComponentList();
        if (ch !== CHARACTER_LIST.WHITE_SPACE && iterate) 
            iterator(ch, idx, length, false);
    };
    console.log(`Entrada: ${input}`);
    inputCharacters.forEach((ch, idx, { length }) => iterator(ch, idx, length));
    if (debugging) {
        console.table(componentList);
        console.log(debugBag);
    }
    return componentList;
}

export default lexicAnalyzer;