import "./customize.css";
import "./app.css";

// import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

import Header from "components/header/Header";
import SubHeader from "components/subheader/SubHeader";
import Footer from "components/footer/Footer";
import Ornament from "components/general/ornament/Ornament";
import Card from "components/card/card-template/CardTemplate";

import Dexter from "img/DexterLogo.png";
import CustomBtn from "components/general/custom-btn/CustomBtn";

const App = () => {
    // const componentList = lexicAnalyzer("var1 + 3 _ ; 2 3 xcasadasdsa_sads");
    // console.log(componentList);
    return (
        <>
            <Header title="DEXTER" icon="fluent:people-team-32-filled" />
            <SubHeader
                title="Analizador Léxico"
                subtitle="Bienvenidos al"
                img={Dexter}
            />
            <main>
                <Ornament
                    colors={[
                        "--primary-color",
                        "--secondary-color",
                        "--third-color",
                    ]}
                />
                <section id="cards-container">
                    <div>
                        <Card cardName="Expresión a analizar" type="analyze" />
                        <div id="btn-container">
                            <CustomBtn
                                title="Limpiar"
                                icon="heroicons-solid:trash"
                                color="--third-color"
                                backColor="--black-xd"
                            />
                            <CustomBtn
                                title="Analizar"
                                icon="arcticons:audio-spectrum-analyzer"
                                color="--secondary-color"
                                backColor="--secondary-back-color"
                            />
                        </div>
                    </div>
                    <Card cardName="Resultados" type="result" />
                    <Card cardName="Más información" type="info" />
                </section>
            </main>
            <Footer team="GROUP 3" />
        </>
    );
};

export default App;
