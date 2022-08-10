import lexicAnalyzer from "../lexicAnalyzer";

export const test = () => {
    try {
        lexicAnalyzer(`
        
        if var1+ifIcould   forof forx
    
    
        `, true);
    }
    catch (err) {
        console.log(err);
    }
}