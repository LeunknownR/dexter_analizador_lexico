import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

const App = () => {
    const componentList = lexicAnalyzer("var1 + 3 _ ; 2 3 xcasadasdsa_sads");
    console.log(componentList);
    return (
        <>
            <h1>HASJDAJS</h1>
        </>
    );
}

export default App;