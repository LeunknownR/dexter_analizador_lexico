import CustomIcon from "components/general/custom-icon/CustomIcon";
import { showSpacesAndLinebreaks } from "utils/showSpacesAndLinebreaks";

import { Container, Content, CharText } from "./styles";

const Operation = ({ state, charGroup, charValue }) => {
    return (
        <Container>
            <Content>
                <div>
                    <CustomIcon
                        icon="ic:outline-keyboard-arrow-right"
                        color="var(--primary-color)"
                        backColor="var(--third-color)"
                        size="XS"
                        padding="3px"
                    />
                </div>
                <div>
                    <span title={state}>{state}</span>
                </div>
            </Content>
            <Content>
                <div>
                    <CustomIcon
                        icon="bi:arrow-down-up"
                        color="var(--secondary-color)"
                        size="XS"
                    />
                </div>
                <div>
                    <span>
                        {charGroup}{" "}
                    </span>
                    <CharText className="custom-purple-subtitle">{showSpacesAndLinebreaks(charValue)}</CharText>
                </div>
            </Content>
        </Container>
    );
};

export default Operation;
