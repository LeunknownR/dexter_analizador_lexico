import documentation from "logic/utils/documentation";
import lexicAnalyzer from "logic/lexic/lexicAnalyzer";


const test = () => {
    try {
        const [componentList, debugLog] = lexicAnalyzer(`ssd if+asdsa ofascxc( 23   `);
        console.log(debugLog);
    }
    catch (err) {
        console.log(err);
    }
}

export default test;