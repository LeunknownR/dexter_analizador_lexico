import CustomIcon from "components/general/custom-icon/CustomIcon";
import { showSpacesAndLinebreaks } from "utils/showSpacesAndLinebreaks";

import { Container, Content } from "./styles";

const Operation = ({ state, charGroup, charValue }) => {
    console.log(charGroup)
    return (
        <Container>
            <Content>
                <div>
                    <CustomIcon
                        icon="ic:outline-keyboard-arrow-right"
                        color="--primary-color"
                        backColor="--third-color"
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
                        color="--secondary-color"
                        size="XS"
                    />
                </div>
                <div>
                    <span>
                        {charGroup}{" "}
                    </span>
                    <span className="custom-purple-subtitle">{showSpacesAndLinebreaks(charValue)}</span>
                </div>
            </Content>
        </Container>
    );
};

export default Operation;
