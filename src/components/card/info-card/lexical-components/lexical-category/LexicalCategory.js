import CustomIcon from "components/general/custom-icon/CustomIcon";
import { useState } from "react";
import ListContainer from "./list-container/ListContainer";
import { RowContainer, RowContent, Content } from "./styles";

const LexicalCategory = ({ subtitle, words, components }) => {
    const [isOpenContainer, openContainer] = useState(false);
    const handleOpenContainer = () => {
        openContainer((prev) => !prev);
    };
    return (
        <>
            <RowContainer onClick={handleOpenContainer}>
                <RowContent>
                    <Content>
                        <h3 className="custom-title-4">{subtitle}</h3>
                        {subtitle === "Palabras reservadas" && (
                            <CustomIcon
                                icon="mdi:pentagram"
                                color="var(--secondary-color)"
                                size="S"
                                rotate="2"
                            />
                        )}
                    </Content>
                    <Content>
                        {isOpenContainer 
                        ? <CustomIcon
                            icon="eva:arrow-ios-downward-outline"
                            rotate="2"
                            color="var(--secondary-color)" />
                        : <CustomIcon
                            icon="eva:arrow-ios-downward-outline"
                            color="var(--barely-used-gray-2)" />}
                    </Content>
                </RowContent>
            </RowContainer>
            {isOpenContainer && 
            <ListContainer
                words={words}
                components={components}
            />}
        </>
    );
};

export default LexicalCategory;
