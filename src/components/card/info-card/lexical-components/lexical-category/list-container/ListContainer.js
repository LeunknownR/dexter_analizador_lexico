import { Container } from "./styles";
import ReservedWordsList from "../reserved-words-list/ReservedWordsList";
import LexemesList from "../lexemes-list/LexemesList";

const ListContainer = ({display, words, components}) => {
    return (
        <Container>
            {display === "Palabras reservadas"
                        ? words.map((word, idx) => (
                              <ReservedWordsList
                                  word={word}
                                  key={idx}
                                  className="reserved-word"
                              />
                          ))
                        : components?.map(({ description, lexeme }, idx) => (
                              <LexemesList
                                  description={description}
                                  lexeme={lexeme}
                                  key={idx}
                              />
                          ))}
        </Container>
    );
};

export default ListContainer;