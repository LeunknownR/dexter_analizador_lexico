import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

const test = () => {
    try {
        const [componentList, debugLog] = lexicAnalyzer(`ssd if+asdsa ofascxc( 23   `);
        console.log(debugLog);
    } catch (err) {
        console.log(err);
    }
}

const manuelExpressions = [
    `resultado $= 3 - 4; nombre$="Manuel"; informacion $= @\`Soy "desarrollador de software"\``,
    "operacion $= 3 ** (2 + 3);",
    "if (nota > 10) { estado $= \"Aprobado\" }",
    "persona.nombres $= \"Manuel Alejandro\";",
    "estaBarato $= producto => producto.precio < 5;",
    "List<Product> products $= new List<Product>();",
    "List<1G1, G2> products $= new List<1G1, G2>();",
    "bgcolor $= #252",
    "forecolor $= #235000",
    "var $= #1",
    "var $= #6",
    "''"
]

const test3 = () => {
    try {
        const expressionIdx = 6;
        console.log(manuelExpressions[expressionIdx]);
        const [componentList, debugLog] = lexicAnalyzer(manuelExpressions[expressionIdx]);
        showConsoleDebugLog(debugLog);
        for (const component of componentList) {
            console.log(component);
        }
    } catch (err) {
        console.log(err);
    }
}
const showConsoleDebugLog = debugLog => {
    console.table(debugLog.reduce((simplifiedLog, { operations, title }) => {
        let newSimplifiedLog = [...simplifiedLog, " "];
        newSimplifiedLog = [...newSimplifiedLog, `** ${title.lexeme} - ${title.token} **`];
        newSimplifiedLog = [...newSimplifiedLog, ...operations.map(({ state, char, newState }) => {
            const group = char.group ? `${char.group} ` : "";
            return `>>> ${state} && ${group}${char.value} = ${newState}`;
        })];
        return newSimplifiedLog;
    }, []));
}

export default test;