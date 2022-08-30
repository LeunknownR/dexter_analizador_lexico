import "./customize.css";
import "./app.css";

import Header from "components/header/Header";
import SubHeader from "components/subheader/SubHeader";
import Footer from "components/footer/Footer";
import Cards from "components/card/Cards";

import Dexter from "img/DexterLogo.png";
import test from "logic/utils/test";

const App = () => {
    return (
        <>
            <Header title="DEXTER" icon="fluent:people-team-32-filled" />
            <SubHeader
                title="Analizador Léxico"
                subtitle="Bienvenidos al"
                img={Dexter}
            />
            <main>
                <Cards/>
            </main>
            <Footer team="GROUP 1 - VIC - COMPILADORES" />
        </>
    );
};

export default App;