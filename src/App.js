import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

const App = () => {
    const componentList = lexicAnalyzer("if var1+ifIcould");
    console.log(componentList);
    return (
        <>
            <h1>HASJDAJS</h1>
        </>
    );
}

export default App;