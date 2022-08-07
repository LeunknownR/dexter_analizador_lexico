import './customize.css';

import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

import Header from "components/header/Header";
import SubHeader from 'components/subheader/SubHeader';
import Footer from 'components/footer/Footer';

import Dexter from 'img/DexterLogo.png'

const App = () => {
    // const componentList = lexicAnalyzer("var1 + 3 _ ; 2 3 xcasadasdsa_sads");
    // console.log(componentList);
    return (
        <>
            <Header title="DEXTER" icon="fluent:people-team-32-filled" />
            <SubHeader title="Analizador Léxico" subtitle="Bienvenidos al" img={Dexter} />
            <Footer team="GROUP 3"/>
        </>
    );
};

export default App;
