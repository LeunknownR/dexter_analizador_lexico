import documentation from "logic/utils/documentation";
import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

const test = () => {
    try {
        const [componentList, debugLog] = lexicAnalyzer(`ssd if+asdsa ofascxc( 23   `);
        console.log(debugLog);
    } catch (err) {
        console.log(err);
    }
}

const test3 = () => {
    try {
        const [componentList, debugLog] = lexicAnalyzer(`1<=6||2>=6`);
        showConsoleDebugLog(debugLog);
        for (const component of componentList) {
            // console.log(component);
        }
    }
    catch (err) {
        // console.log(err);
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
        // return newSimplifiedLog;
    }, []));
}
test3();

export default test;