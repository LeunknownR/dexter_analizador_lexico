import documentation from "logic/utils/documentation";
import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

const test = () => {
    try {
        lexicAnalyzer(`ssd if+asdsa ofascxc( 23   `);
    }
    catch (err) {
        console.log(err);
    }
}

const test3 = () => {
    try {
        const [componentList, debugLog] = lexicAnalyzer(`ssdiF for &&1`);
        showConsoleDebugLog(debugLog);
        console.log(componentList);
    }
    catch (err) {
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
test3();

export default test;