import { Container } from "./styles";
import ReservedWordListItem from "../reserved-words-list-item/ReservedWordListItem";
import LexemesListItem from "../lexemes-list/LexemesList";

const ListContainer = ({ words, components }) => {
    return words
    ? <Container direction="row">
        {words.map((word, idx) => 
            <ReservedWordListItem
                key={idx}
                className="reserved-word"
                word={word}/>)}
    </Container>
    : <Container>
        {components?.map(({ description, lexeme }, idx) => {
            return (
                <LexemesListItem
                    key={idx}
                    description={description}
                    lexeme={lexeme}/>
            );
        })}
    </Container>
};

export default ListContainer;