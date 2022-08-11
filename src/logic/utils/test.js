const { default: lexicAnalyzer } = require("logic/lexic/lexicAnalyzer");

const test = () => {
    try {
        lexicAnalyzer(`
        if+asdsa ofascxc( 23   `, true);
    }
    catch (err) {
        console.log(err);
    }
}

export default test;