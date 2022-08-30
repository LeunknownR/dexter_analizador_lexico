import { Container } from "./styles";

import documentation from "logic/utils/documentation";
import LexicalCategory from "./lexical-category/LexicalCategory";

const LexicalComponents = () => {
    return (
        <Container>
            {documentation?.map(({ subtitle, words, components }, idx) => (
                <LexicalCategory
                    subtitle={subtitle}
                    words={words}
                    components={components}
                    key={idx}
                />
            ))}
        </Container>
    );
};

export default LexicalComponents;
